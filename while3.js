var a = Math.ceil(Math.random() * 10); // 10을 곱해서 0 ~ 10 사이의 실수를 만들기 
var b = Math.ceil(Math.random() * 10); // 0 ~ 10 사이의 정수를 생성 

var solution = a * b;
var ans; 
ans = parseInt(prompt(a + "*" + b + "= ?")); // 사용자에게 정답을 입력받기 
if (ans == solution) { // if 조건문을 이용해 정답을 비교
    console.log("맞았습니다.");
}
else {
    console.log("틀렸습니다.");
}