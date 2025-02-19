// 스코프와 호이스팅

// 스코프
// 규칙에 따라 식별자(변수, 함수, 클래스)에 접근할 수 있는 범위가 존재하는데
// 이 식별자 접근 규칙에 따른 유효 범위를 스코프라고 한다.
// 스코프에는 Global Scope, Local Scope, Block Scope와 Function Scope가 있습니다.

let a = 10
console.log(a);

function a1() {
    let b = 20
    console.log(b); // 20
    console.log(a); // 10
}
a1()

// console.log(b); // b is not defined. => 글로벌 변수에서 b의 값이 선언되지 않아서

const b = "b"
const b1 = () => { 
    console.log(b) // b
    // b2() // 접근할 수 없다. 
    b3()

    const b2 = () => {
        console.log(b)
        console.log("함수 호출")
    }
    b2()

    function b3() {
        console.log("함수 b3 호출")
    }
}
b1()

// ------------------------------------------------------------------------------------------------------------------

// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌려올라가는 현상

// 1. 함수표현 방식을 사용했을 경우
// sum()
// 함수 표현식은 인터프리터가 해당 코드 줄에 도달할 때만 로드된다.
// 따라서 sum이라는 함수가 호풀되었을 시점에, sum 함수가 선언이 되지 않은 상태에서 호출이 되었기 때문에 오류가 발생한다.
const sum = (x, y) => { return x + y }

// 2. 함수선언 방식을 사용했을 경우
double(10)

// 함수선언문은 var와 같이 함수 스코프(function scope)를 가지고
// let과 const 변수는 블록 스코프(block scope)를 갖는다.
// 또한, 함수 선언식은 코드가 실행되기 전에 로드되지만,
// 함수 표현식은 인터프리터가 해당 코드에 도달할 경우에 로드된다.
// 함수 선언식은 호이스팅 되지만, 함수 표현식은 호이스팅이 되지 않는다.

function double(x) {
    console.log(x * 2)
    return x * 2
}