function shiftLeft(){
  console.log("\n inside shift");
  console.log("accum value is",accum);
  console.log("Q value is",divident_Q);
  
  var combined_aq = accum+divident_Q+"_";
  console.log("combined_aq value is",combined_aq);
  combined_aq = combined_aq.substr(1,len*2);
  accum = combined_aq.substr(0,len);
  divident_Q = combined_aq.substr(len,len);
  console.log("accum value is",accum);
  console.log("Q value is",divident_Q);
  return 0;
}