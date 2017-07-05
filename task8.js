function factorial(num) {
    if(num < 1)
        return 'Число должно быть больше 0 для вычисления факториала!';
    if(num == 1 || num == 2)
        return num;
    let result = num;
    for(let i = num - 1; i > 1; i--){
        result *=i;
    }
    return result;
}
console.log(factorial());