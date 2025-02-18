// 반복문 for-in / for-of / forEach

// 1. for-in
// for-in 객체 데이터일 경우에만 사용할 수 있는 반복문 입니다.
const post = {
    id:1,
    title:"해커스 HRD",
    creator: "Kim",
    createAt: "2024-12-31"
}

for(property in post) { 
    console.log(property) // 키값만 출력
    console.log(post[property]) // 키값만 출력
    console.log(property + ": " + post[property]) // 키값만 출력
}

for(key of Object.keys(post)) {  // 객체에서 for-of 사용하는 법
    console.log(Object.keys(post)) // 키 값만 추출해서 배열로 만들기
    console.log(post[key])
}

// 2. for-of
// for-of는 배열 데이터일 경우에만 사용할 수 있는 반복문 입니다.
const posts = [
    {
        id:1,
        title:"해커스 HRD 자바스크립트 1강",
        creator: "Kim",
        createAt: "2024-12-10"
    },
    {
        id:2,
        title:"해커스 HRD 자바스크립트 3강",
        creator: "Lee",
        createAt: "2024-12-20"
    },
    {
        id:3,
        title:"해커스 HRD 자바스크립트 6강",
        creator: "Park",
        createAt: "2024-12-30"
    }
]

for(let post of posts) {
    console.log(post);
    console.log(post.creator);
}


const posts1 = [
    [10, 20, 30],
    [1, 2, 3],
    [100, 200, 300]
]

for(let post of posts1) {
    console.log(post);
    console.log(post[2]);
}

// 3. forEach
// forEach 메서드는 배열을 순회하며 각 요소에서 함수를 호출합니다.
// forEach 메서드의 첫 번쨰 인자는 함수입니다.
// forEach 메서드의 첫 번째 인자의 첫 번째 인자는 배열 요소의 값
// forEach 메서드의 첫 번째 인자의 두 번째 인자는 배열 요소의 인덱스
// forEach 메서드의 첫 번째 인자의 세 번째 인자는 배열 그 자체


// posts.forEach((배열 요소의 값), 배열 요소의 인덱스, 배열 그 자체=>{ })

posts.forEach((post, index, array) => { 
    console.log(post);
    console.log(index);
    console.log(array);

    post.id = 100
})
console.log(posts)


const res = posts.map((post, index, array) => {
    return post
})

console.log(res);
console.log(posts);
console.log(res === posts); // false ==> 다른 메모리 주소 참조