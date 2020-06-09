const connectionManager = new ConnectionManager();

function toLobby(){
  connectionManager.connect('ws://localhost:9000');
}

function toMain(){
  connectionManager.disconnect();
}
