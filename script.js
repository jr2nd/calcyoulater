'use strict';
let buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickButton);
} //for

function clickButton() {
  let symbol = this.innerHTML;
  let entry = document.getElementById('entry');
  let result = document.getElementById('result');
  let operation = document.getElementById("operation");
if(Number.isInteger(parseInt(symbol))){
      entry.innerHTML = parseInt(entry.innerHTML) * 10 + parseInt(symbol);
return;
}//if
        switch (operation.innerHTML) {
          case '?':
operation.innerHTML = symbol;
result.innerHTML = entry.innerHTML;
entry.innerHTML = 0;
          break;
    case '+':
      result.innerHTML =
        parseFloat(entry.innerHTML) + parseFloat(result.innerHTML);
      break;
    case '-':
       result.innerHTML =
        parseFloat(result.innerHTML) - parseFloat(entry.innerHTML);
      break;
    case '/':
      if (parseFloat(entry.innerHTML) == 0) return;
      result.innerHTML = parseFloat(result.innerHTML) / parseFloat(entry.innerHTML);
      break;
    case '*':
result.innerHTML = result.innerHTML * entry.innerHTML;
      break;
    case '.':
      if (entry % 10) return;
      entry.innerHTML = entry.innerHTML + '.';
      break;
      case "clear<br>all":
      result.innerHTML = '0';
      entry.innerHTML = '0';
      break;
    case '=':
      entry = 0;
      result = 0.0;
      break;
    default:
      return;
  } //switch
  entry.innerHTML = 0;
  operation.innerHTML = symbol;
} //clickButton()
