const WebSocketServer = require('ws').Server;
const Session = require('./session'); //Changed Session function to a new file and exporting it
const Client = require('./client'); //Changed Session client to a new file and exporting it
const Index = require('./index');

const server =new WebSocketServer({port: 9000});
const sessions = new Map;

function createID(len = 3, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'){
  let id = '';
  while (len--){
    id += chars[Math.random() * chars.length | 0];
  }
  return id;
}

function createClient(conn, id = createID()){
  return new Client (conn, id);
}

function createSession(id = createID()) { //prevents from server crashing when opening non-existing server
  if (sessions.has(id)) {
    throw new Error(`Session $(id) already exists`);
  }

  const session = new Session(id);
  console.log('Creating session', session);
  sessions.set(id, session);
  return session;
}


function broadcastSession(session){
  const clients = [...session.clients];
  clients.forEach(client =>{
      client.send({
        type: 'session-boradcast',
        peers: {
          you: client.id,
          clients: clients.map(client => client.id),
        },
      });
  })
}
//------------------------------------------------------------------------------------------
server.on('connection', conn => {
  console.log('Connection established');
  const client = createClient(conn);

  conn.on('message', msg => {
    console.log('Message received', msg);
    const data = JSON.parse(msg);

    if (data.type === 'create-session'){
      const id = createID();
      const session = createSession();
      session.join(client);
      // sessions.set(session.id, session);
      client.send({
        type: 'session-created',
        id: session.id,
      });
    }

    else if (data.type === 'join-session') {
        const session = sessions.get(data.id) || createSession(data.id);
        session.join(client);
        broadcastSession(session)
    }

    console.log ('Sessions', sessions);
  });

  conn.on('close', () => {
    console.log('Connection closed');
    const session = client.session;
    if (session){
      session.leave(client);
      if (session.clients.size === 0){
        sessions.delete(session.id);
      }
    }
    broadcastSession(session);
  });
});
