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
    conn.write("Name: Maryna")
  })
  conn.on("close", () => {
    console.log("You ded cuz you idled");
  })

  return conn;
}

exports.connect = connect;