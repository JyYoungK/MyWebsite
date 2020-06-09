class Client{
  constructor(conn, id)
  {
    this.conn = conn;
    this.id = id;
  }

  send(data) //sending message to json
  {
    const msg = JSON.stringify(data);
    console.log(`Sending message to JSON ${msg}`);
    this.conn.send(msg, function ack(err) {
      if (err){
        console.error('Message failed', msg, err);
      }
    });
  }
  getId(){
    return this.id;
  }

  getSession(){
    return this.conn;
  }

}

module.exports = Client;
