const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log("connected to SERVER...");
    conn.write("Name: SCM");
  });

  conn.on('data', data => {
    console.log( console.log("SERVER says: _______", data));
  });

  conn.on('connect', () => {
    console.log('connected');
  })
  return conn;
};

module.exports = { connect };
