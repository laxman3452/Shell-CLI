const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define a list of built-in commands
const builtins = ["echo", "type", "exit"];

function prompt() {
  rl.question("$ ", (answer) => {
    // Parse the input command
    const [command, ...args] = answer.split(" ");

    if (command === "exit" && args[0] === "0") {
      // console.log("Exiting with code 0");
      rl.close();
      process.exit(0); // Exit with code 0
    } else if (command === "echo") {
      // Implement the echo command
      console.log(args.join(" "));
    } else if (command === "type") {
      // Implement the type command
      if (args.length === 0) {
        console.log("type: missing operand");
      } else {
        args.forEach((arg) => {
          if (builtins.includes(arg)) {
            console.log(`${arg} is a shell builtin`);
          } else {
            console.log(`${arg}: not found`);
          }
        });
      }
    } else {
      console.log(`${command}: command not found`);
    }

    prompt(); // Recursively call prompt to continue the loop
  });
}

prompt(); // Start the REPL loop
