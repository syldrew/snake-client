//Update play.js with the following code.**********************************

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

//connect();

setupInput(connect());
//*****************************************************************************



// const net = require("net");

// //establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   // added this:
//    conn.on('data', (data) => {
//     console.log('Server says', data)
//  });

//  // add Name by including this script to client.js
//  conn.on('connect', () => {
//   conn.write('Name: SCM');
// });

//  conn.on('connect', (data) => {
//   console.log('Successfully connected to game server');
// });

// // Send the string "Move: up" as data to the server via the conn object
// conn.on('connect', () => {
//     conn.write('Move: up')
//     setInterval(() => {conn.write('Move: left')}, 100)
//   })


//   return conn;
// };

// console.log("Connecting ...");

// connect();

// // add this line at the botton of the file
// //module.exports = { connect };


// // // Add the function setupInput to play.js. Copy and paste the following code:
// // const setupInput = function () {
// //   const stdin = process.stdin;
// //   stdin.setRawMode(true);
// //   stdin.setEncoding("utf8");
// //   stdin.on("data", handleUserInput);
// //   stdin.resume();


// //   //Create a function called handleUserInput and register it as the "data" callback handler for stdin.
// //   const handleUserInput = function(data) {
// //     if (data === '\u0003') {
// //       process.exit();
// //     } else if (data === 'w') {
// //       connection.write('Move: up');
// //     } else if ( data === 'a') {
// //       connection.write('Move: left')
// //     } else if ( data === 's') {
// //       connection.write('Move: down')
// //     } else if ( data === 'd') {
// //       connection.write('Move: right')
// //     } else if ( data === 'm') {
// //       connection.write('Say: hello!!! am Done finally')
// //     }
// //   };
// //   stdin.on('data', (data) => {
// //     handleUserInput(data);
// //   });
// //   return stdin;

// // };


// //Update play.js to pass the object returned from connect into the setupInput function
