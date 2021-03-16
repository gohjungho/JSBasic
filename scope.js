function a() { // a() 함수 생성
    var v_a = "a" // 변수 v_a 초기화 

    function b() { // a() 함수 안에 b() 함수를 생성 
        var v_b = "b"; // b() 함수 안에서 변수 v_b를 초기화 
        console.log("b: ", typeof(v), typeof(v_a), typeof(v_b));
    }
    // 함수 안에서 정의된 건 바깥으로 갖고 나오지 못한다.


    b(); // a() 함수 안에서 b() 함수를 호출 

    console.log("a: ", typeof(v), typeof(v_a), typeof(v_b));
}
// 위와 마찬가지로 함수 안에서 선언된 것은 가지고 나올 수 없다. 
// 안에서 선언된 것을 가지고 나오고 싶을 때는 return으로 그 값을 받는 방법이 있다. 


var v = "v"; // a() 함수 바깥에서 변수 v 초기화 

a(); // a() 함수 호출 

console.log("o: ", typeof(v), typeof(v_a), typeof(v_b));

