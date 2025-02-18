// 전개연산자 spread

const users = ["김아무개", "이마무개", "박아무개"]
console.log(users)
console.log(...users)

const newUsers = ["최아무개", "송아무개", ...users, "장아무개"]
console.log(newUsers)

function setUsers(user1, user2, ...user3) {
    return {
        user1: user1,
        user2: user2,
        user3: user3
    }
}

console.log(setUsers("최", "송",...users))
console.log(setUsers("최", "송",...users, "장"))
console.log(setUsers("최", "송", users[0]))

function newSetUsers(user1, user2, ...user3) {
    return {
        user1,   // 키와 밸류가 같으면 하나만 적어도 동일한 기능
        user2,
        user3
    }
}

console.log(newSetUsers("최", "송",...users))
console.log(newSetUsers("최", "송",...users, "장"))
console.log(newSetUsers("최", "송", users[0]))