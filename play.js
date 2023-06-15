//Update play.js with the following code.**********************************

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

//connect();

setupInput(connect());
