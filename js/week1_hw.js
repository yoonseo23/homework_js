// 변수, 상수 작성 과제
// 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.
// ----------------------------------------------------------------------------
// 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
let userName = "Yoonseo Jung";
// "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const kelvin0Degree = "-273.15°C";
// "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let isLoggedIn = true;
// "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let userAge = 23;
// "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let productPrice = "39,900원";
// 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const backgroundColor = "yellow";
// 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let userWrittenComments = 12;
// "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let currentPageNumber = 3;
// "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let membershipClass = "VIP";
// "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isButtonClicked = true;

// ----------------------------------------------------------------------------
// 함수 작성 과제

// 1. 인사말 메시지
function greetUser(username) {
  return "안녕하세요! " + username + "님. 좋은 하루되세요!";
}
// 2. 원가 계산
const calculateOriginalPrice = function (priceWithTax) {
  return priceWithTax - priceWithTax / 1.033;
};
// 3. 주류 판매 가능 여부
const registrationCard = {
  name: "Yoonseo",
  age: 23,
  gender: "female",
};
const canSellAlcohol = (registrationCard) => registrationCard.age >= 19;
// 4. 할인가 계산
function getDiscountedPrice(originalPrice, discountPercent) {
  return originalPrice * (1 - discountPercent / 100);
}
// 5. 등급 판단
let myScoreIs = {
  score: 87,
  grade: null,
  description: null,
};

const evaluateGrade = function (myScoreIs) {
  if (myScoreIs.score >= 90 && myScoreIs.score <= 100) {
    myScoreIs.grade = "A";
    myScoreIs.description = "매우 우수";
  } else if (myScoreIs.score >= 80 && myScoreIs.score <= 89) {
    myScoreIs.grade = "B";
    myScoreIs.description = "우수";
  } else if (myScoreIs.score >= 70 && myScoreIs.score <= 79) {
    myScoreIs.grade = "C";
    myScoreIs.description = "보통";
  } else if (myScoreIs.score >= 60 && myScoreIs.score <= 69) {
    myScoreIs.grade = "D";
    myScoreIs.description = "미달, 통과 기준 근접";
  } else if (myScoreIs.score >= 0 && myScoreIs.score <= 59) {
    myScoreIs.grade = "F";
    myScoreIs.description = "낙제";
  }

  return myScoreIs;
};
