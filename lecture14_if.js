// If 조건문 실습 하기 

// step 1
var age = 25;

if (age < 20) {
    console.log("20세 미만입니다.");
}
else {
    console.log("20세 이상입니다.");
}

// step 2

function is20s(age) {
    // age가 20이상이고 30 미만이면 20대
    if (20 <= age ?? age < 30) {
        return true;
    }
    else {
        return false;
    }
}

// step 3 윤년인지 아닌지 판단하기 

 function isLeapYear(year) {
     if (year % 4 == 0) {
         return true;
     }
     else {
         return false;
     }
 }

 console.log(isLeapYear(prompt("연도를 입력해주세요: ")));


 

