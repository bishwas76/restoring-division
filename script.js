var $id = function (id) { return document.getElementById(id) };
var $tag = function (tag) { return document.getElementsByTagName(tag) };
var $class = function (className
) { return document.getElementsByClassName(className) };
var $qs = function (qs) { return document.querySelector(qs) }; // to select things like tagName.className , tagName#id
//myElement.textContent || myElement.innerText to get inner text. just for hint

//global variables

var accum;
var quotient = 0;
var remainder = 0;
var count = 0;
var len;
var divident_Q;
var diviser_M_pos;
var diviser_M_neg;
var stepNo;

main();
// Check for number of bits of divident and diviser;
function main() {
  stepNo = 0;
  var element = $id("start_box");
  var x, i;
  x = document.querySelectorAll(".step-highlighted");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("step-highlighted");
    
  }
  element.classList.add("step-highlighted");
  const newRow = `
    <tr>
      <th> S.N </th>
     <th> A </th>
      <th> Q </th>
      <th> count</th>
      <th> operation </th>
   </tr>
  
  `
  $id('steps-table').innerHTML = newRow;
  $id('M').innerHTML = "";
  $id('mM').innerHTML = "";
  $id('quotient').innerHTML = "";
  $id('remainder').innerText = "";
  start();
}
function modifySvg(nextStep){
  var x, i;
  x = document.querySelectorAll(".step-highlighted");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("step-highlighted");
    
  }
  var element = $id(nextStep);
  element.classList.add("step-highlighted");
}

function start() {

  $id("do-next").removeAttribute("disabled");
  $id('do-next').setAttribute("onclick","initialiser()")
}

function initialiser() {
  modifySvg("setter_box_init");
  divident_Q = prompt("Enter a divident: ");
  var diviser_M = prompt("Enter a divident: ");
  SetLength(divident_Q, diviser_M);
  count = len;
  stepNo=0;
  accum = decimalTObinary(0, len);


  initial_binary(divident_Q, diviser_M); //init binary number with proper width

  //binary Addition ; A = A + (-M) or A = A + M
  console.log("\n accum_value is " + accum);
  console.log("diviser_M_pos is " + diviser_M_pos);
  console.log("length of bits is " + len);
    console.log("divident_Q is " + divident_Q);

  console.log("initialiser called");
  $id('do-next').setAttribute("onclick","shift_left()");
  addNewRow("--INITIALIZED A,Q,M and count");
  $id('M').innerHTML = diviser_M_pos;
  $id('mM').innerHTML = diviser_M_neg;
}

function shift_left() {
  modifySvg("setter_box_SL");
  $id('do-next').setAttribute("onclick","a_minus()");
  shiftLeft();
  addNewRow("Shifted AQ left");
}
function a_minus() {
   modifySvg("setter_box_a-m");
  $id('do-next').setAttribute("onclick","is_a()");
  accum = binaryAdd(accum, diviser_M_neg, len);
  addNewRow("A subtract M");
}
function is_a() {
  modifySvg("descision_box_is_less");
  if((accum.substr(1,1))==="1"){
    $id('do-next').setAttribute("onclick","a_plus()");
  }
  else{
    $id('do-next').setAttribute("onclick","q0_1()");
  }
}
function a_plus() {
  modifySvg("setter_box_a_p_m");
  $id('do-next').setAttribute("onclick","count_minus()");
  accum = binaryAdd(accum, diviser_M_pos, len);
  divident_Q = (divident_Q.substr(0,len-1)+'0');
  addNewRow("A plus M and Q0 is set 0");
  
}
function q0_1() {
  modifySvg("setter_box_q0_1");
  $id('do-next').setAttribute("onclick","count_minus()");
  divident_Q = divident_Q.substr(0,len-1)+'1';
  addNewRow("q0 is set to 1");
}
function count_minus() {
  modifySvg("setter_box_count_m");
  $id('do-next').setAttribute("onclick","is_count()");
  count--;
  addNewRow("count --");

}
function is_count() {
  modifySvg("descision_box_count_0");
  if(count==0){
    $id('do-next').setAttribute("onclick","stop()");
  }
  else{
    $id('do-next').setAttribute("onclick","shift_left()");
  }

}
function stop() {
  modifySvg("stop_box");
  $id('do-next').removeAttribute("onclick");
  $id('do-next').setAttribute("disabled","");
  if (divident_Q.substr(0,1)==="1"){
  $id('quotient').innerHTML = binaryTOdecimal(divident_Q.substr(1,len-1));
  }
  else{
    $id('quotient').innerHTML = binaryTOdecimal(divident_Q);
  }
  if (accum.substr(0,1)==="1"){
  $id('remainder').innerHTML = binaryTOdecimal(accum.substr(1,len-1));
  }
  else{
    $id('remainder').innerHTML=binaryTOdecimal(accum)
  }
}

// supportive functions below
function addNewRow(message){
    stepNo++;
  const newRow = `
    <tr>
      <td> ${stepNo}</td>
     <td> ${accum}</td>
      <td> ${divident_Q} </td>
      <td> ${count}</td>
      <td> ${message} </td>
   </tr>
  
  `
  $id('steps-table').innerHTML += newRow;
}

//real conversion of decimals to respective below

function initial_binary(div_Q, div_M) {
  if (div_Q < 0) {
    divident_Q = decimalTObinary(Math.abs(div_Q), len);
    divident_Q = complement(divident_Q);
  }
  else {
    divident_Q = decimalTObinary(div_Q, len);
  }
  if (div_M < 0) {
    diviser_M_neg = decimalTObinary(Math.abs(div_M), len);
    diviser_M_pos = complement(diviser_M_neg);
  }
  else {
    diviser_M_pos = decimalTObinary(div_M, len);
    diviser_M_neg = complement(diviser_M_pos);
    console.log("\nM is positive and negative is",diviser_M_neg)
  }

  return 0;
}

function SetLength(q, m) {
  if (Math.abs(q) > Math.abs(m)) {
    let a = (Math.abs(q) >>> 0).toString(2);
    len = a.length + 1;//latest
    //len = a.length
    console.log(a);
    console.log(len);
  }
  else {
    let a = (Math.abs(m) >>> 0).toString(2);
    len = a.length + 1;
   // len = a.length
    console.log(a);
    console.log(len);
  }
}



