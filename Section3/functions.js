function logger() {
  console.log("My name is Dat");
}
// call / running / invoking function
logger();
// logger();
// logger();

function iColor(color) {
  //   console.log("I like color:", color);
  const ilikeColor = `I Like Color ${color}`;
  return ilikeColor;
}
let color = "red";
const redColor = iColor(color);
console.log(redColor);
