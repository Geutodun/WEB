// 객체 메서드

// 1. assign
// assign() 메서드는 
// 첫 번째 인자는 대상객체, 두 번째 인자는 출처객체라고 부릅니다.
// Object.assign(target, source) => source 부분을 target에 집어 넣고 새로운 객체를 반환한다.

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
//const newObj = { c: 3, d: 4 }

const returnedTarget = Object.assign(target, source)
const returnedTarget2 = Object.assign({}, target, source)

//const test = Object.assign({}, target, newObj)
//console.log(test);

console.log(returnedTarget); // 키 값이 같으면 source의 키 값을 따라감
console.log(returnedTarget2); // Expected output: Object {a:1, b:4, c:5}
console.log(returnedTarget === target); // Expected output: true => 생긴 모양이 똑같아서 true를 반환하는 것이 아니다. 값 자체가 포함되어 있다. => 같은 메모리 주소를 바라보고 있기 때문입니다.

const a = { k: 123 }
const b = { k: 123}

console.log(a === b); // false => 다른 메모리 주소를 바라보고 있기 때문입니다.

// 2. keys
// keys() 메서드는 한 객체의 키 값만 추출하여 새로운 배열을 반환하는 메서드이다.
const user = { name: "HACKERS HRD", age: 30, email: "jackers@test.com" }
const keys = Object.keys(user) 
console.log(keys); // => [name, age, email]
console.log(user["name"]); // "HACKERS HRD"

const values = keys.map((key) => { return user[key] }) // => 해당 객체의 해당 key 값을 가진 value만 추출이 되는구나!
console.log(values);