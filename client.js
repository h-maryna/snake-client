const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("connect", () =>{
    console.log("Successfully connected");
    conn.write("Name: Mar")
  });
    conn.on("connect", () =>{
      conn.write("Move: up")
    });
    conn.on("connect", () =>{
      conn.write("Move: right")
    });
    conn.on("data", (data) => {  //recieve data from server
      console.log("server output: ", data)
    });
    conn.on("close", () => {
    console.log("You ded cuz you idled");
  })

  return conn;
}

exports.connect = connect;