function solution(arr) {
    var answer = [];
     if(arr.length <= 1){
        return [-1];
    }else {
        arr.sort((a, b) => b - a);
        for(let i=0; i<arr.length-1; i++){
            answer.push(arr[i]);
        }
    }
    return answer;
}