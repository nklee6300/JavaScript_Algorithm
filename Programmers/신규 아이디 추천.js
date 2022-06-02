function solution(new_id) {
    let string = '';
    //소문자변환
    string = new_id.toLowerCase()
    //알파벳 소문자, 빼기, 밑줄, 마침표 제외하고 제거 
        .replace(/[^a-z0-9\.\-\_]/gi,'')
    //마침표가 2번 이상 연속된 경우 하나의 마침표로 치환
        .replace(/\.+/g,'.')
    //마침표가 처음이나 끝에 위치한다면 제거
        .replace(/^\.+|\.+$/g,'');
    //빈 문자열이라면 'a'를 대입하고 아니라면 15자까지만 자르기
    string = string? string.substr(0, 15) : 'a';
    //끝에 위치한 마침표 제거 
    string = string.replace(/\.+$/g,'');
    //글자수가 2이하인 경우 마지막 문자만 전체 글자수가 3이상이 될때까지 반복해서 끝에 붙이기
    while(string.length <= 2) {
        string = string + string.substr(string.length-1);
    }

    return string;
}