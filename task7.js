function longestWordOfString(string){
    let words = string.split(' ');
    let maxLength = 0;
    let maxLengthIndex = 0;
    words.forEach((element, index) => {
        if(element.length > maxLength){
            maxLengthIndex = index;
            maxLength = element.length;
        }
    });
    return words[maxLengthIndex];
}
console.log(longestWordOfString('И какое же слово самое длинное в этой строке?'));