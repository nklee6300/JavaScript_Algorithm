function solution(numbers) {
    let sum = 45;
    for(let i=0; i<numbers.length; i++){
        sum = sum - numbers[i];
    }
    return sum;
}