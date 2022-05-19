function solution(numbers) {
    const answer = [];
    // 1. numbers에서 서로 다른 두 수를 뽑아서 더하지만 리그가 아닌 토너먼트식 경기로 생각.
    // numbers[1] + numbers[2] == numbers[2] + numbers[1] 이기 때문임.
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j < numbers.length; j++){ 
            // 두 인자를 더해 sum에 저장
            const sum = numbers[i] + numbers[j];
            // 요소가 배열에 존재하는지 확인하고 배열을 업데이트
            if(answer.indexOf(sum) == -1){ //answer[]에 sum의 값이 없으면
                    answer.push(sum); //answer[]에 sum값을 추가한다.
            }
        }
    }
    // 2. 더한 것들을 오름차순으로 정렬 (결과)
    answer.sort((a,b)=>a-b);
    return answer;
}