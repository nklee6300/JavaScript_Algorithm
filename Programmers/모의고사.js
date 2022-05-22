function solution(answers) {
    var answer = [];
    var ans1 = [1,2,3,4,5];
    var ans2 = [2,1,2,3,2,4,2,5];
    var ans3 = [3,3,1,1,2,2,4,4,5,5];
    var count = [0,0,0];
    
    for(var i=0; i<answers.length; i++){
        if(answers[i] == ans1[i%5]){
            count[0] += 1;
        }if(answers[i] == ans2[i%8]){
            count[1] += 1;
        }if(answers[i] == ans3[i%10]){
            count[2] += 1;
        }
            
    }
    const maxCount = Math.max(...count);
    for(var j=0; j<3; j++){
        if(count[j]===maxCount){
            answer.push(j+1);
        }
    }
    return answer;
}