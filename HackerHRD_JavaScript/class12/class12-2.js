// this
// 일반함수는 '호출위치'에 따라서 this를 정의한다.
// 화살표 함수는 '자신이 선언된 함수 범위'에서 this를 정의한다. 

const name = "박아무개"

const user1 = {
    name: "Kim",
    declare: function() { console.log(this.name) },
    express: () => { console.log(this.name) }
}

user1.declare() // "Kim" 
user1.express() // undefined

// ---------------------------------------------------------------------------------

const user2 = {
    name: "이아무개",
    declare: user1.declare,
    express: user1.express,

    test: function () {
        const test2 = () => {console.log(this.name)}
        test2()
    }
}

user2.declare() // '이아무개'
user2.express() // undefined
user2.test() // '이아무개'

// ---------------------------------------------------------------------------------

// 생성자 함수에서 this 정의하기
function User(name) {
    this.name = name
}

User.prototype.declare = function () { console.log(this.name) }
User.prototype.express =  () => { console.log(this.name) }

const user3 = new User("박아무개")
user3.declare() // "박아무개"
user3.express() // undefined

// ---------------------------------------------------------------------------------

const timer = {
    name: "최아무개",
    timeout1: function () { setTimeout(function () { console.log(this.name)}, 1000)},
    timeout2: function () { setTimeout(() => { console.log(this.name)}, 1000)}
}

timer.timeout1() // undefined
timer.timeout2() // "최아무개"