function splitString (string, maxLenght) {
	var newString;
	for (var i = 0; i < maxLenght - 3; i++) {
		newString[i] = string [i];
	}
	newString = newString + "...";
}