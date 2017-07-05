function generateNumber ( numberOne, numberTwo){
	var number = numberOne + Math.random() * (numberTwo - numberOne);
	number = Math.random (number);
	if(number === numberTwo) {generateNumber(numberOne, numberTwo)};
	else return {number};
}