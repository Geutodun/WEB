// 1. 문자열 string (텍스트)
// 문자열 데이터를 만드는 방법은 큰 따옴표, 작은 따옴표, 백틱(``) 기호를 활용하여 문자열 데이터를 만들면 되고 혹은 감싸면 된다.
let userName = "해커스 HRD"
let phone = '010-1234-5678'
let introduction = `Hello, My name is ${userName}. My phone number is ${phone}.`

console.log(typeof userName, userName)
console.log(typeof phone, phone)
console.log(typeof introduction, introduction)

// --------------------------------------------------------------------------------------------------------------------------

// 2. 숫자
// 숫자 데이터를 만드는 방법
let number = 123
let float = 3.14
let stringNumber = "123" // 문자열 상태

console.log(typeof number, number)
console.log(typeof float, float)
console.log(typeof stringNumber, stringNumber)