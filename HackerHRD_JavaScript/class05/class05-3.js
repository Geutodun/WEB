// 반복문 for


// for문은 널리 쓰이는 패턴을 갖는 루프를 단순화 합니다.
// for(initialize; test; increment) {
    // statement(문) => 로직을 실행한다.
// }

for(let i = 0; i < 10; i++) {
    console.log(i)
}


const posts = [
    {id:1, title:"안녕하세요, 해커스 HRD 자바스크립트 1강입니다.", creator: "Kim", createAt: "2024-12-20"},
    {id:2, title:"안녕하세요, 해커스 HRD 자바스크립트 2강입니다.", creator: "Lee", createAt: "2024-12-21"},
    {id:3, title:"안녕하세요, 해커스 HRD 자바스크립트 3강입니다.", creator: "Park", createAt: "2024-12-22"},
    {id:4, title:"안녕하세요, 해커스 HRD 자바스크립트 4강입니다.", creator: "Ha", createAt: "2024-12-23"}
]

for(let i = 0; i <posts.length; i++) {
    console.log(posts[i])
    console.log(posts[i].creator)
}