// In the input module, create a variable in the outer-most scope called connection, which can default to undefined.
let connection;

// Add the function setupInput to play.js. Copy and paste the following code:
const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    //stdin.on("data", handleUserInput);
    stdin.resume();
    
    
    //Create a function called handleUserInput and register it as the "data" callback handler for stdin.
    const handleUserInput = function(data) {
      if (data === '\u0003') {
        process.exit();
      } else if (data === 'w') {
        connection.write('Move: up');
      } else if ( data === 'a') {
        connection.write('Move: left')
      } else if ( data === 's') {
        connection.write('Move: down')
      } else if ( data === 'd') {
        connection.write('Move: right')
      } 

    };
    stdin.on('data', (data) => {
      handleUserInput(data);
    });
    return stdin;
  
  };
  
  module.exports = { setupInput };
