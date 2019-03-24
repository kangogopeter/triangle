function peter() {
var call = document.getElementsByClassName("car").innerHTML;
var list = document.getElementById("bike").innerHTML;
var people = document.getElementsByClassName("cat").innerHTML;

var pet = parseFloat(call);
  var kan = parseFloat(list);
  var chep = parseFloat(people); 

  if (pet === kan && kan === chep && chep === pet && kan === pet && chep === kan && pet === chep) {
    alert("it is EQUILERTERAL !");
  }
  else if ( kan === chep && pet !== kan || chep === kan ) {
    alert("it is an ISCOSELES !");
  }
  else if (pet != chep && kan !== chep || kan !== pet){
    alert("it is a SCALENE !")
  }
 else {
 alert("not a TRIANGLE !")
 }
  }
peter();