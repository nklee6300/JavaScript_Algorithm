function solution(s){
    var answer = true;
    var sum=0;
    var sum1=0;
    for(let i=0; i<s.length; i++){
        if(s[i] == "p" || s[i] == "P"){
            sum += 1
        }else if(s[i] == "y" || s[i] == "Y"){
            sum1 += 1
        }
    }
    if(sum == sum1){
        answer = true
    }else if(sum != sum1){
        answer = false
    }
    return answer;
}