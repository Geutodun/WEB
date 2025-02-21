// 비동기 async & await

let valid = false
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(valid){
                console.log("특정 조건 이행")
                resolve("SUCCESS")
            }
            else {
                console.log("특정 조건 불이행")
                reject("FAIL")
            }
            } , ms)
    })
}

// delay(3000).then((result) => { 
//     console.log("done Promise", result) 
//     }).catch((error) => {
//         console.log("fail Promise", error)
//     })  

// -----------------------------------------------------------------------------------------------------------------

async function main() {
    try { // resolve 부분
        console.log("호출")

    const result = await delay(5000)  // 실제로 동작은 비동기로 하지만, 코드적으로 봤을 땐, 동기처럼 동작하는 듯 하다.
    console.log("done async", result)
    }
    catch(error) {  // reject 부분
        console.log("fail async", error)
    }
}

main()

