function fibonachi (number){
	if(number === 1) {
		return 1;
	}
	else return {fibonachi(number - 1)}*{fibonachi (number)}
}