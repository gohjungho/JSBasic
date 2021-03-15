// while3.js -> do while 반복문으로 바꾸기 

var a = Math.ceil(Math.random() * 10); // 10을 곱해서 0 ~ 10 사이의 실수를 만들기 
var b = Math.ceil(Math.random() * 10); // 0 ~ 10 사이의 정수를 생성 

var solution = a * b;

do {
    var ans = parseInt(prompt(a + "*" + b + "= ?")); // 사용자에게 정답을 입력받기 
} while (ans != solution) // 둘이 같지 않으면 계속 돌아감
console.log("정답입니다.")

