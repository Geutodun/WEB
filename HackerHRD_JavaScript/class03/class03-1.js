// 1. 배열 리터럴
// 배열을 만드는 가장 단순한 방법은 배열 리터럴이다.
// 배열 리터럴은 배열 요소를 대괄호 안에서 콤마로 구분한 리스트 형태입니다.

let empty = []
let numbers = [1, 2, 3, 4, 5]
let mix = [1, "2", true, {name:"해커스HRD"}] // 여러 데이터(타입) 가능 (마지막은 객체 데이터)

// 2. 분해연산자 - spread (...)       *spread : 흩뿌리다
let initial = [1, 2, 3, 4, 5]
let newArray = [0, ...initial, 6] // spread를 이용해서 흩뿌리면 새로운 배열로 사용 가능

console.log(newArray)
initial[0] // 1
initial[1] // 2

// 분해연산자는 배열을 얇게 복사할 때도 유용합니다.
// 얕은 복사의 개념은 원본 데이터의 값을 변형시키지 않는다.
let original = ["original"]
let copy = [...original]

copy[0] // original
copy[0] = "reset"
console.log(original)
console.log(copy)

// 3. Array() 생성자
let newArr1 = new Array() // []

// - 배열 길이를 나타내는 숫자 인자 하나로 호출
let newArr2 = new Array(10) // 배열의 길이가 10인 배열을 생성 => 인자로 받은 숫자의 지정된 길이를 가진 배열을 생성
console.log(newArr2.length)

// 4. Array.of()와 Array.from()
let newArr3 = Array.of()
let newArr4 = Array.of(10)
let newArr5 = Array.of(1, 2, 3) // 가로 안에 값이 그대로 들어가는 배열 생성

console.log(newArr3)
console.log(newArr4)
console.log(newArr5)

// Array.from()이 중요한 이유는 배열 비슷한 객체를 진정한 배열로 바꾸는 방법이기 때문입니다.
// 배열 비슷한 객체란, 숫자인 length 프로퍼티가 있고, 이름이 정수인 프로퍼티에 값이 저장된 객체를 말합니다.
let copy2 = Array.from(original)
console.log(copy2)

let original2 = [1, 2, 3, 4, 5]
let copy3 = Array.from(original2, function (element) { return element * 2 })
console.log(copy3) // [2, 3, 6, 8, 10]

// ------------------------------------------------------------------------------------------------------------------------

// 배열읽기
// 배열요소에 접근할 때는 [] 기호를 사용한다.
let getArr1 = original2[0] // 1
let getArr2 = original2[1] // 2
let getArr3 = original2[2] // 3
let getArr4 = original2[3] // 4
let getArr5 = original2[4] // 5

// 배열길이를 측정할 때는 .length를 사용한다.
let length = original2.length // 5

// 배열요소 추가와 삭제
// 가장 단순한 방법은 새 인덱스에 값을 할당하는 방법입니다.
let a = []
a[0] = "zero"
a[1] = "one"

console.log(a)

// push() 메서드는 배열 마지막에 값을 추가한다.
let b = []
b.push("zero") // ["zero"]
b.push("one") // ["zero", "one"]

console.log(b)

// unshift() 메소드는 배열의 맨 앞에 값을 삽입하고 기존 요소를 뒤로 밀어낸다.
let c = []
c.unshift("one")
c.unshift("zero")

console.log(c)

// pop() 메서드는 push() 메서드와 반대로 배열의 맨 마지막 요소를 제거하고 그 값을 변환하고 길이를 1만큼 줄인다.
let d = ["zero", "one", "two"]
d.pop()

console.log(d)

// shift() 메서드는 배열의 첫 번쨰 요소를 제거해 반환하며 길이를 1만큼 줄이고 나머지 요소를 모두 앞으로 당깁니다.
let e = ["zero", "one", "two"]
e.shift() 

console.log(e)

// 결론
// push() <====> ubshift()
// pop() <====> shift()