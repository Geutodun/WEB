// 얕은 복사와 깊은 복사

// 복사란, 원본을 베낀다.
// 얕은 복사 : 원래 값과 복사된 값이 같은 메모리 주소를 바라보고 있음을 의미합니다.
// 깊은 복사 : 얕은 복사처럼 참조 주소 값을 복사하는 것이아닌, 값만 복사되는 것을 의미한다.
// 원본과의 참조가 완전히 끊어진 상태를 말한다. => 깊은 복사

// 새롭게 생성된 user가 a라는 메모리에 할당되었다고 하자.
const user = {
    id:1,
    name:"kim",
    address: "서울",
    company: "해커스",
    maiors:["JavaScript"]
}

 const copyUser = user
// console.log(user)
// console.log(copyUser)
// console.log("----------")
// console.log(user === copyUser)

user.address = "경기"
console.log(user)
console.log(copyUser)

// user 객체 데이터의 address 값만 변화시키고자 했는데
// 위 두 콘솔에서 address 값이 둘다 바뀐것을 확인할 수 있었습니다.
// 그 이유는 user 객체와 copyUser 객체 모두 a라는 메모리 주소를 참조하고 있기 때문입니다.

// ------------------------------------------------------------------------------------------------------------------------------

const newUser = {
    id:1,
    name:"kim",
    address: "서울",
    company: "해커스",
    maiors:["JavaScript"]
}
// Object(대상객체, 출처객체)
// 대상객체에 출처객체 데이터를 담아서 새로운 객체 데이터를 반환한다. ===> 얕은복사 (shallow copy)
const copyNewUser = Object.assign({}, newUser) // 새로운 메모리에 새로운 데이터가 할당된다.
console.log(newUser === copyNewUser); // false
const copyNewUser2 = {...newUser} // 전대 연산자를 통해 얕은 복사가 진행된다. ===> Object.assign()
console.log(newUser === copyNewUser2); // false


newUser.address = "경기"
console.log("newUser",newUser); 
console.log("copyNewUser",copyNewUser); 
console.log(newUser === copyNewUser); // false

// ------------------------------------------------------------------------------------------------------------------------------

const addedMajor = ["React", "Vue.js", "Angular", "Svelte"]
newUser.maiors.push(...addedMajor)

console.log(newUser)
console.log(copyNewUser)

// 우리가 원했던 건 newUser의 majors의 배열에만 값이 추가되길 원했는데
// 다른 메모리 주소를 참조하고 있는 copyUser majors 값도 변한걸 확인할 수 있다.
console.log(newUser.maiors === copyNewUser.maiors) // true

// 여기서 newUser.maiors === copyNewUser.maiors의 값이 true인 이유는 newUser와 copyNewUser의 객체가 생성된 메모리 주소 자체의 주소는 다르지만, 
// newUser와 copyNewUser 내 majors라는 배열 데이터 자체는 따로 복사처리가 되지 않았다. 그래서 복사처리가 되지 않았기 때문에 그 값을 같이 공유하고 있다.
// 그래서 쉽게 풀어 설명홰보면, 가장 바깥쪽 껍데기만 / 껍데기 메모리 주소만 복사가 됐다고 이해하시면 됩니다.

// ------------------------------------------------------------------------------------------------------------------------------

// lodash 라이브러리
// 이를 활용하여 deep copy 깊은 복사를 활용해보도록 하겠습니다.


const deepCloneUser = _.cloneDeep(newUser)

console.log(deepCloneUser);

newUser.maiors.push(...addedMajor)

console.log("newUser",newUser);
console.log("deepCloneUser",deepCloneUser);
console.log(newUser === deepCloneUser);