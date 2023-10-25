let output = document.getElementById("output");
let expression = "";
let result = ""; // To save the final value before changing the expression or output

//For showing clicked button
document.addEventListener("click",display);
function display(element){
  if (element.target.classList.contains("calcterms")){
    let buttonClicked = element.target.textContent; //Getting value or content of the button clicked
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

//For clear button
clrbutton.addEventListener("click",clear);
function clear(){
  expression = "";
  output.value = "";
}

//Final result or equal to(=) symbol operation
equalsbutton.addEventListener("click",equals);
function equals(){
  expression = expression.replace(/x/g, '*');
  expression = expression.replace(/÷/g, '/');
  expression = expression.replace(/\^/g, '**');
  result = eval(expression);
  output.value = result;
  expression = String(result);
}

//For backspace
bkspacebutton.addEventListener("click",backspace);
function backspace(){
  expression = expression.slice(0,expression.length - 1);
  output.value = expression;
}

//For keyboard entry of values
document.addEventListener("keydown", function(event) {
  const operators = ['+', '-', '*', '/', '^', '%', '.','(',')'];
  if (event.key.match(/[0-9]/) || operators.includes(event.key)) {
    expression += event.key;
    output.value = expression;
  }

  if (event.key == "Enter"){
    event.preventDefault();
    equals();
  }

  if (event.key == "Backspace"){
    backspace();
  }
});
