const countDownBoxEl = document.querySelector(".container_countDownBox")
const targetDate = new Date('2025-03-31 23:59:59')

let endtime = new Date(targetDate).getTime() // getTime 메서드는 표준시에 따라 지정된 날짜의 시간에 해당되는 숫자 값을 반환
let period = endtime - new Date().getTime() // 타깃 날짜에서오늘 날짜를 빼주어 카운트다운의 기간을 설정


// 카운트 다운 UI에 들어갈 데이터
let days = ""
let hours = ""
let minutes = ""
let seconds = ""

function countDown() {
    period = endtime - new Date().getTime() // 밀리세컨드를 반환

    const daysValue = Math.floor(period / (1000 * 60 * 60 * 24))
    const hoursValue = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesValue = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60))
    const secondsValue = Math.floor((period % (1000 * 60)) / 1000)

    days = daysValue
    hours = hoursValue
    minutes = minutesValue
    seconds = secondsValue
}

setInterval(() => {
    countDown()
    countDownBoxEl.innerHTML = `
        <div class="container_countDownBox_countDown">
            <div class="layout">
                <span class="layout_text">마감</span>
                <div class="layout_time">${days}일</div>
                <div class="layout_time">${hours}시간</div>
                <div class="layout_time">${minutes}분</div>
                <div class="layout_time">${seconds}초</div>
                <span class="layout_text">전 이에요.</span>
            </div>
            <button class="button">이력서 열람하기</button>
        </div>`
}, 1000) // 일정한 시간 간격을 두고 반복해서 실행할 때 사용








// 정적 Math.floor() 메서드는 항상 반올림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환

// const daysValue = Math.floor(period / (1000 * 60 * 60 * 24))
// const hoursValue = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
// const minutesValue = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60))
// const secondsValue = Math.floor((period % (1000 * 60)) / 1000)

// console.log(daysValue)
// console.log(hoursValue)
// console.log(minutesValue)
// console.log(secondsValue)
