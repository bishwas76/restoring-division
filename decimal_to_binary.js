
function decimalTObinary(decimal,len_bits){
  var init_conversion =  (decimal >>> 0).toString(2);
  
  var fin_converted = fixPadding(init_conversion,len_bits);
  console.log("\nfinal conv "+fin_converted);
  console.log("length conv--------",len_bits);
  return fin_converted;
}
function fixPadding(unfixed,len_bits){
  var zero = "0";
  console.log("initial conv "+unfixed)
  console.log("length conv --"+len_bits);
  while( (unfixed.length) < len_bits){
    var unfixed = (zero+unfixed);
  }
  return unfixed;
}