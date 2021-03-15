// 카페 메뉴를 출력하는 코드는 동일 

console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var count = 0; // 횟수를 셀 변수를 선언하고 초기화 

// while 반복문을 이용해서 count가 3 미만일 동안만 수행하도록 설정 
while (count < 3) {
    var choice = parseInt(prompt("메뉴를 선택해 주세요."));

    console.log(choice + "번 메뉴를 선택하셨습니다.");
    switch (choice) {
        case 1:
            console.log("아이스 아메리카노는 1500원입니다.");
            break;
        case 2:
            console.log("카페 라떼는 1800원입니다.");
            break;
        case 3:
            console.log("카푸치노는 2000원입니다.");
            break;
        case 4:
            console.log("홍차는 1300원입니다.");
            break;
        default:
            console.log("죄송합니다. 그런 메뉴는 없습니다.");
            break;     
    }
    count++; // 반복문을 마치기 전에 count를 증가 
}

console.log("안녕히 가십시오."); // 반복문이 끝나면 메시지를 출력
