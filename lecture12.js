var str = "Hello";
str.length;

var str2 = "World";
str.concat(str2); // concatenate을 줄여 쓴 단어

var str3 = str.concat(str2);
str3;

var str = "abcdeabcde";
str.charAt(0);  // 첫 번째 문자열(인덱스 0)에 접근
str.length;     // 변수의 길이 확인
str.charAt(9);  // 열 번째 문자열(인덱스 9)에 접근
str.charAt(10); // 열한 번째 문자열은 없으므로 빈 문자열("") 반환
str.charAt(-1); // 음수를 입력한 경우에도 빈 문자열("") 반환
str.charAt(str.length - 5); // 뒤에서 n번째 문자열 구하기 

str.substring(2, 4) // python의 슬라이싱과 같음 
str.substr(2,4) // 2번째 자리부터 길이가 4까지를 출력 

str.indexOf("bc"); // 문자열이 있는 곳의 시작 위치를 반환
str.lastIndexOf("bc"); // 문자열이 마지막으로 나오는 곳의 시작 위치를 반환
str.lastIndexOf("f"); // 해당 문자열에 없는 문자열을 입력하면 -1을 반환
