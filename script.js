var button = document.getElementById('enter')
var input = document.getElementById('userinput')
var ul = document.querySelector("ul")
var cape = document.getElementById("CT")
var jhb = document.getElementById("JB")
var drbn = document.getElementById("DN")

//MY FUNCTION TO GRAB INPUT
function inputLength() {
  return input.value.length;
}
// MY FUNCTION TO ADD
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}
//ADDINF FUNCTION TO TARGET TOWN.
// var allCT = function(li){
//
//   var ctReg = [];
//
//   for (var i=0;i<regNumber.length;i++){
//     var reg = regNumber[i];
//
//         //check if the current reg starts with 'CY,CA'
//     if (reg.startsWith('CY')){
//             // add reg starting with 'CY,CA' to the list
//     	ctReg.push(regg);
//
//     }
//    }
//   return ctReg;
// }
// should print [CT License plates]
//console.log(eReg);
function addRegAfterClick() {
  if (inputLength() === 8) {
    createListElement()
  }
}

function addRegAfterEnter(event) {
  if (inputLength() > 6 && event.keyCode === 13) {
    createListElement()
  }
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function clearData2() {
ul.innerHTML = "";
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  button.addEventListener("click", addRegAfterClick);
  input.addEventListener("keypress", addRegAfterEnter);
  eReset.addEventListener('click', clearData2);
