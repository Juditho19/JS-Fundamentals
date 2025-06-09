const arg = process.argv[2];  
if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
} 

 
// or
// const args = process.argv.slice(2)

// if (args[0] === undefined){
//     console.log("No argument");
// } else {
//     console.log(args[0]);
// }
