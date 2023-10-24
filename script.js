//const buttons = document.querySelectorAll(".calcterms");
let output = document.getElementById("output");
let expression = "";
document.addEventListener("click",display);
function display(element){
  if (element.target.classList.contains("calcterms")){
    let buttonClicked = element.target.textContent;
    expression+=buttonClicked;
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
  
}