// 연산자

// 자바스크립트에서 표현식을 만들 때, 가장 많이 쓰는 방법은 바로 연산자입니다.
// 1. 산술연산자
console.log(1 + 2) // 더하기
console.log(3 - 1) // 빼기
console.log(5 * 2) // 곱하기
console.log(5 / 2) // 나누기
console.log(5 % 2) // 나머지

let count = 1

count++ // 값을 1 증가
count-- // 값을 1 감소
count += 2 // 값을 2 더한다. ==> count = count + 2와 동일 
count *= 3 // 값을 3 곱한다. ==> count = count * 3과 동일

// 2. 일치연산자
let x = 2
let y = 3

console.log(x === y) // false ==> 불일치
console.log(x !== y) // true ==> 값이 불힐치 하는지 체크를 하기 때문에 true

let a = "10"
let b = 10

console.log(a == b) // true ==> 데이터 타입의 관계없이 값만 일치하는지 아닌지 여부를 체크. 동등연산자
console.log(a === b) // false ==> 데이터 타입까지 일치라는지 아닌지 여부를 체크. 일치연산자

// 3. 논리연산자

// && => and
// || => or

let condition = 10
let condition2 = '20'

function typeCheck(value) {
    if(typeof value === 'string') {
        console.log("인자로 받은 데이터의 타입은 문자열 입니다.")
    }
    else if(typeof value === 'number') {
        console.log("인자로 받은 데이터의 타입은 숫자 입니다.")
    }
}

typeCheck(condition) // 숫자
typeCheck(condition2) // 문자열

function typeCheck2(value) {
    if (typeof value === 'string' || typeof value === 'number') {
        console.log("타입은 문자열, 숫자 둘 중 하나입니다.")
    }
    else {
        console.log("기타 타입 입니다.")
    }
}

typeCheck2(condition) 
typeCheck2(condition2) 
typeCheck2(true) // boolean