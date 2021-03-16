// 전역변수와 지역변수의 차이 알기 

function shadowing_example() {
    var val = 5;
    // 함수 안쪽에서 바깥에서 선언한 변수와 이름이 같은 변수 val을 선언하고 초기화
    console.log("F", val); // 함수 안에서 변수 val의 값 출력
    val++; // val 값을 1 증가 
}

var val = 0; // 함수의 바깥에서는 변수 val을 선언하고 0으로 초기화 
shadowing_example(); // 함수 호출 
console.log("O", val); // 가장 바깥에서 변수 val의 값 출력 
