function display(value) {
  document.getElementById("result").value += value;
}

function clearScreen() {
  document.getElementById("result").value = null;
}

function calculate() {
  try{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
  }catch(err){
  document.getElementById("result").value = "Enter value";
  }
 
}
function remove(){
    var elem =  document.getElementById("result").value;
    var rem=elem.slice(0,elem.length-1);
    document.getElementById("result").value = rem;
}
function doMath(num){
  var inputNum1=document.getElementById("result").value;
  var result = Math.sqrt(inputNum1);
  document.getElementById("result").value = result;
}