// 배열 메서드

// 1. forEach()
// forEach 메서드는 배열을 순회하여 각 요소에서 함수를 호출한다.
// forEach 메서드 첫 번째 인자는 함수입니다.
// forEach (함수(배열 요소의 값, 배열요소의 인덱스, 배열 자체))
let data = [1, 2, 3, 4, 5]
let sum = 0

// 배열의 합을 구하시오.
data.forEach(function(element) { 
    sum = sum + element 
    // sum += element
})
console.log(sum)

const res = data.forEach(function(element, index, data) {
    data[index] = element + 1
})
console.log(data);
console.log(res); // undefined

// 2, map()
// map() 메서드는 각 배열 요소를 함수에 전달해 호출하며, 그 함수가 반환하는 값으로 이루어진 배열을 반환한다.
let numbers = [1, 2, 3, 4, 5]
// numbers.map(function (element) { element * element })

const res2 = numbers.map(function (element) { return element * element })
console.log(numbers);
console.log(res2);

// 3. filter
// filter() 메서드는 기존 배열의 일부만 포함하는 부분 집합을 반환한다.
// 전달하는 함수를 기준으로 하며 이 함수는 true / false를 반환한다.
// 반환 값이 true이거나 true로 변화될 수 있는 값이면, 해당 요소는 반환되는 배열에 포함된다.
let a = [1, 2, 3, 4, 5]
const res3 = a.filter((element) => { return element > 3 })
const res4 = a.filter((element) => { return element % 2 === 0})

console.log(res3);
console.log(res4);

// 4. find와 findIndex
// find와 findIndex 메서드는 판별 함수에서 true 같은 값을 반환하는 요소를 찾아 배열을 순회한다는 점은 filter()와 같습니다.
// 하지만 filter()와 달리 이들 메서드는 기준을 만족하는 첫 번째 요소를 찾는 즉시 순회를 멈춘다.
// 만족하는 요소를 찾으면 fond()는 그 요소를, findIndex()는 그 요소의 인덱스를 반환합니다.
// 만족하는 요소를 찾지 못하면 find()는 undefined를 findIndex()는 -1을 반환한다.

let b = [1, 2, 3, 4, 5]
console.log(b.findIndex((element)=>{return element === 3})); //2
console.log(b.findIndex((element)=>{return element === 6})); // -1
console.log(b.find((element)=>{return element % 5 === 0})); // 5
console.log(b.find((element)=>{return element % 7 === 0})); // undefined

// 5. every와 some
// every()와 some() 메서드는 배열 요소에 판별 함수를 적용하고 결과에 따라 true / false를 반환합니다.

let c = [1,2,3,4,5]
console.log(c.every((element) => { return element < 20})); // true
console.log(c.every((element) => { return element % 2 ===0})); // false (모든 값이 true여야 true 반환)

// some() 메서드는 배열 요소 중 판별 함수가 true를 반환하는 것이 하나하도 있으면 true를 반환하여
// 요소 전체가 false를 반환할 때, false를 반환한다.

let d = [1,2,3,4,5]
console.log(d.some((element) => { return element % 2 === 0 }));
console.log(d.some((element) => { return element < 1 }));

// every와 some은 자신이 어떤 값을 반환할지 확실해지면 순산 순회를 멈춥니다.
// some은 판별함수가 true를 반환하는 즉시 true를 반환하므로 모든 요소가 false를 반활할 때만 배열 전체를 순회했다라고 이해하시면 되고, 실제로도 그렇습니다.
// every는 반대로 판별함수가 false를 반화하는 즉시 false를 반환하므로 모든 요소가 true를 반활할 때만 배열 전체를 순회했다라고 이해하시면 되고, 실제로도 그렇습니다.

// 6. reduce와 reduceRight
// reduce()와 reduceRight() 메서드는 배열 요소를 값 하나로 만드는 함수입니다.
// reduce()는 인자를 2개를 받습니다. 첫 번째 인자에는 '축소' 동작을 해야하는 함수이다. 두 번째는 초기값을 입력해야 한다.

let array1 = [1, 2, 3, 4, 5]
const sumWithInitial = array1.reduce((accumlator, currentValue) => accumlator + currentValue, 0 )
console.log(sumWithInitial);

let array2 = [2, 2, 2]
// const square = array2.reduceRight((acc, cur) => Math.pow(val, acc)); // 2^(2^2)

// 7. flat()과 flatMap()을 사용한 배열 평탄화 메서드
const flat1 = [1, 2, 3, [4, 5]].flat()
console.log(flat1) / [1,2,3,4,5]

// 평탄화 레벨을 올리기도 가능하다.
const initial = [1, [2,[3,[4,[5]]]]]
console.log(initial.flat(1));
console.log(initial.flat(2));
console.log(initial.flat(3));
console.log(initial.flat(4));
console.log(initial.flat(5));

// 8. concat()으로 배열병합  
const numArr = [20, 30, 40, 50]
const users = ["kim", "Lee", "park"]

console.log(numArr.concat(users)); // 새로운 배열 생성
console.log(numArr); // 원본 배열 데이터는 전혀 영향이 없다.
console.log(users); // 원본 배열 데이터는 전혀 영향이 없다.