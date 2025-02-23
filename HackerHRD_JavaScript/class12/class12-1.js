// 생성자 함수(prototype)
// 내장 함수
// 첫 번째 잘히는 무조건 대문자로

const user1 = {
    name: "김아무개",
    age: 30,
    getData: function () { return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다` } // this라는 것은 this가 소속되어 있는 함수가 실행되는 객체를 지칭한다.
}
// console.log(user1);

// 위 코드는 기본적인 객체의 구조는 key-value의 형태를 띄고 있고
// 이때, key를 프로퍼티(property)라는 명칭으로 부른다.
// 단, 함수 데이터가 할당되어 있다면 그것은 더 이상 속성 즉, 프로퍼티가 아니라 메서드라고 부른다.

const user2 = {
    name: "이아무개",
    age: 30,
    getData: function () { return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다` } // this라는 것은 this가 소속되어 있는 함수가 실행되는 객체를 지칭한다.
}
// console.log(user2);

const user3 = {
    name: "박아무개",
    age: 30,
    getData: function () { return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다` } // this라는 것은 this가 소속되어 있는 함수가 실행되는 객체를 지칭한다.
}
// console.log(user3);

// ---------------------------------------------------------------------------------------------------------------------------

// 같은 코드를 여러번 작성해야하는 부분이 보이고, 로직도 같은 부분이 보인다. ex) getData 메서드 같은 부분
// 이때, 메서드가 생성될 때도 메모리를 차지하기 때문에 위와 같은 코드는 메모리 효율이 떨어진다.

function User(name, age) {
    this.name = name
    this.age = age
    // 아래 코드를 또 작성하는 것은 비효율적이다.
    // this.getData = function() { return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다` }
}

// 로직이 동일하기 때문에 로직자체를 메모리에 한 번만 만들어서 효율적으로 / 효과적으로 관리할 수 있도록 한다.
// 이를 위해 prototype이라는 것을 활용한다.
User.prototype.getData = function() { return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다` }

const user4 = new User('정아무개', 30) // 생성자 함수
const user5 = new User('최아무개', 39) // 생성자 함수
const user6 = new User('하아무개', 50) // 생성자 함수

console.log(user4.getData())
// console.log(user5)
// console.log(user6)


const a = [1, 2, 3]
// forEach / map
console.log(a) // prototype을 보면 여러 prototype으로 만들어진 메서드가 보였는데, forEach, map, every. . .  => getData와 같은 개념
// 자바스크립트는 프로코타입 기반의 언어라고 불린다.