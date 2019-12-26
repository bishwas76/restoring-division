
function binaryAdd(A, diviser_M,length) {
  var add_result;
  var add = (parseInt(A, 2) + parseInt(diviser_M, 2)).toString(2);
  add = fixPadding(add,length)
  add_result = add.split("").reverse().join("").substr(0,length);
  console.log("added_array is ",add_result);
  add_result = add_result.split("").reverse().join("");
  
  console.log("added_array is ",add_result);
  return add_result;
}