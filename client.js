// step 2: Move the connect function from play.js into client.js.
const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function () {
    const conn = net.createConnection({
      host: "localhost",
      port: 50541
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    //  added this:
     conn.on('data', (data) => {
      console.log('Server says', data)
   });

   conn.on('connect', () => {
    console.log('connected');
  });

    // add Name by including this script to client.js
     conn.on('connect', () => {
     conn.write('Name: SCM');
    });
  
    return conn;
  };

  module.exports = { connect };
