function solution(price, money, count) {
    let answer = 0;
    let sum = 0;
    let sum1 = 0;
    for(let i=0; i<count; i++){
        sum = price + (price*i)
        sum1 += sum
    }
    if(money<sum1){
        answer = sum1 - money
    }
    else if(money>=sum1){
        answer = 0
    }
    return answer;
}