// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// // 로직이 동일하기 때문에 로직자체를 메모리에 한번만 만들어서 효율적으로 관리하기 위해
// // prototype 속성을 활용을 했었습니다.

// User.prototype.getData() = function () {
//     return `${this.name} / ${this.age}`
// }

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getData() {
        return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다.`
    }
}

const user1 = new User('김', 30)
const user2 = new User("이", 20)
const user3 = new User("박", 10)

console.log(user1.getData())
console.log(user2)
console.log(user3.getData())

// -------------------------------------------------------------------------------------------------------------------------
// 클래스의 상속(확장)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const user4 = new User('최', 50)
console.log(user4)


class Person2 extends Person {
    constructor(name, age) {
        super(name, age) // super라는 키워드가 Person 클래스를 그대로 상속해서 사용할 수 있게끔 합니다.
    }
}
const user5 = new Person2("강아무개", 23)
console.log(user5)

// -------------------------------------------------------------------------------------------------------------------------

class UserData extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
}

const user6 = new UserData("그룹1", 35, "React")
const user7 = new UserData("그룹2", 45, "Vue.js")

console.log(user6)
console.log(user7)