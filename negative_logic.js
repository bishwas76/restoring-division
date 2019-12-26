function complement(s_num){
  var num = s_num.split('');
  var length_arr = num.length;
    console.log("init array "+num);

  var i;
    for(i=0; i<length_arr; i++){
        if(num[i] === "1"){
            num[i] = "0";
        }
        else if(num[i] === "0"){
            num[i] = "1";
        }
    };
  var oneComp = num.join("");
  console.log("init oneComp "+oneComp);
  var one_num = "1";
  var twoComp = (parseInt(oneComp, 2) + parseInt(one_num, 2)).toString(2);
  //latest modification
  twoComp = fixPadding(twoComp,len);
console.log("final"+twoComp)
  return twoComp;
}