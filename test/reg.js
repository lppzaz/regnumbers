//ADDINF FUNCTION TO TARGET TOWN.
var regId = function(){

  var ctReg = [];

  for (var i=0;i<regNumber.length;i++){
    var reg = regNumber[i];

        //check if the current reg starts with 'CY,CA'
    if (reg.startsWith('CY')){
            // add reg starting with 'CY,CA' to the list
    	ctReg.push(regg);

    }
    if (reg.startsWith('CA')){
            // add reg starting with 'CY,CA' to the list
    	ctReg.push(regg);

    }
    if (reg.startsWith('CJ')){
            // add reg starting with 'CY,CA' to the list
    	ctReg.push(regg);

    }
   }
  return ctReg;
}
// should print [CT License plates]
