class ConnectionManager
{
  constructor(){
    this.conn = null;
    this.peers = new Map;
    this.sessionID = null;
  }

  connect(address){
    this.conn = new WebSocket(address);
    // localStorage.setItem("key", this.conn);
    // console.log(localStorage.getItem("key"));

    this.conn.addEventListener('open', () => {
      console.log('Connection established');
      this.initSession();
    });

    this.conn.addEventListener('message', event => {
      console.log("Received message", event.data);
      this.receive(event.data);
    });
  }

  disconnect(){
    this.conn.close();
    console.log('Disconnection established');
    console.log(window);

    window.location.replace("index.html");
  }

  initSession(){
    this.sessionId = window.location.hash.split('#')[1];
    if (this.sessionId){
      this.send({
        type: 'join-session',
        id: sessionId,
      });
    }
    else {
      this.send({
        type: 'create-session',
      });
    }
  }

  // updateManager(peers){
  //   const me = peers.you; //Initializing me
  //   const clients = peers.clients.filter(id => me !== id); //all the clients other than me gets removed
  // }

  receive(msg){
    const data = JSON.parse(msg);
    if (data.type === 'session-created'){
      window.location.hash = data.id; //creates a '#' next to websitename
    } else if (data.type === 'session-broadcast'){
      this.updateManager(data.peers);
    }
  }

  send(data) //sending message to json
  {
    const msg = JSON.stringify(data);
    console.log(`Sending message to JSON ${msg}`);
    this.conn.send(msg);
  }
}
