// // let greet=function sayHello(){
// //     console.log("Hello");
// // }
// // greet();
// let greet = function sayHello() {
//   console.log("Hello");
// //sayHello(); we can call this function here 
// // because it is within scope
// };
// greet();
// sayHello();// this will give error
// Select the button using its ID
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button was clicked!");
});



