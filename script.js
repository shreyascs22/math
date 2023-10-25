let output = document.getElementById("output");
let expression = "";
let result = "";

//For showing 
document.addEventListener("click",display);
function display(element){
  if (element.target.classList.contains("calcterms")){
    let buttonClicked = element.target.textContent;
    if (buttonClicked == 'x') {
      expression += '*';
    } 
    else if (buttonClicked == '÷') {
      expression += '/';
    } 
    else {
      expression += buttonClicked;
    }
    output.value = expression;
  }
}

clrbutton.addEventListener("click",clear);
function clear(element){
  expression = "";
  output.value = "";
}

equalsbutton.addEventListener("click",equals);
function equals(element){
  expression = expression.replace(/x/g, '*');
  expression = expression.replace(/÷/g, '/');
  expression = expression.replace(/\^/g, '**');
  result = eval(expression);
  output.value = result;
  expression = String(result);
}

document.addEventListener("keydown", function(event) {
  if (event.key.match(/[0-9]/)) {
    expression += event.key;
    output.value = expression;
  }
});
