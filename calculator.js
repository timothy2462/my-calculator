function calculatorDisplay(operands){
	document.getElementById("display").value += operands;
	//return operands
}
function solveMaths(){
	let mathExpression = document.getElementById("display").value;
	let mathAnswer = eval(mathExpression);
	document.getElementById("display").value = mathAnswer;
	//return mathAnswer;
}
function clearScreen(){
	document.getElementById("display").value = "";
} 