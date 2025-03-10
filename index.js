
//  const decrease = document.getElementById("decrease");
// const increase = document.getElementById("increase");
// const reset = document.getElementById("reset");
// const label = document.getElementById("label");
//
// let count= 0;
//  increase.onclick = function(){
//    count++;
//    label.textContent = count;
//  }
//  decrease.onclick = function(){
//    count--;
//    label.textContent = count;
//  }
//  reset.onclick = function(){
//    count = 0;
//    label.textContent = count;
//  }
//
// const button = document.getElementById('button'); // Correct variable name
// const label = document.getElementById('label');
//
// button.onclick = function() {
//   let randomnum = Math.floor(Math.random() * 1000);
//   label.textContent = randomnum;


// const button = document.getElementById('button'); // Correct variable name
// const label = document.getElementById('label');
//
// button.onclick = function() {
//   let yearold = 24;
//   if(yearold = 24){
//     label.textContent = "happy";
//   }
//   else{
//     label.textContent = "Good afternoon";
//   }
// }


// const mycheck =document.getElementById("mycheck");
// const box1 = document.getElementById("box1");
// const box2 = document.getElementById("box2");
// const box3 = document.getElementById("box3");
// const button = document.getElementById("button");
// const subres = document.getElementById("subres");
// const paymethod = document.getElementById("paymethod");
//
// button.onclick = function(){
//   if(mycheck.checked){
//     subres.textContent = "You have successfully subscribed.";
//   }
//   else{
//     subres.textContent = "You haven't subscribed.";
//   }
//
//   if (box1.checked) {
//     paymethod.textContent = "Payment method: VISA";
//   } else if (box2.checked) {
//     paymethod.textContent = "Payment method: Mastercard";
//   } else if (box3.checked) {
//     paymethod.textContent = "Payment method: RuPay";
//   } else {
//     paymethod.textContent = "No payment method selected.";
//   }
//
// }
//  let username="";
//  username="username";
//   while(username === ""){
//     console.log("Enter your username please");
//   }
//    console.log(username);

// let loggedin = true;
// let username;
// let password;
//
// do {
//   username = prompt("Enter your username");
//   password = prompt("Enter your password");
//
//   if (username === "users" && password === "hey") {
//     loggedin = true;
//     console.log("Logged in");
//   } else {
//     console.log("wrong username or password");
//   }
//
// }while(!loggedin);

// for(let i=5 ; i >=1 ;i--){
//   console.log(i);
// }
// console.log("how's going")

// const minNum = 1;
// const maxNum = Infinity;
// const result = Math.random() * (maxNum - minNum ) * 10;
//
// console.log(result);
//  function1();
//
//  function function1(){
//   let x = 1;
//   console.log(x);
//  }
//
// function function2(){
//   let x = 44;
//   console.log(x);
// }

const temp = document.getElementById('temp');
const tofah = document.getElementById('tofah');
const tocel = document.getElementById('tocel');
const result = document.getElementById('result');
let temps
function convert() {
  if (tofah.checked) {
    temps = Number(temp.value);
    temps = temps * 9/5 + 32;
    result.textContent = temps + "°F";
  }
  else if(tocel.checked) {
    temps = Number(temp.value);
    temps = (temps - 32) * 9/5 ;
    result.textContent = temps + "°C";
  }
  else{
    result.textContent = "Yo folk select a unit "
  }
}
