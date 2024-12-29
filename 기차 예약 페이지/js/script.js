let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // 모든 슬라이드 숨김
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // 슬라이드 인덱스 초기화
    slides[slideIndex - 1].style.display = "block"; // 현재 슬라이드 표시
    setTimeout(showSlides, 3000); // 3초마다 슬라이드 전환
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("mySlides").length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("mySlides").length }
    showSlidesManually();
}

function showSlidesManually() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // 모든 슬라이드 숨김
    }
    slides[slideIndex - 1].style.display = "block"; // 현재 슬라이드 표시
}

function updateTime() {
    const now = new Date(); // 현재 시간 가져오기
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    let dateString = now.toLocaleDateString('ko-KR', options); // 날짜 문자열 가져오기

    // 날짜 문자열에서 마지막 점(.) 제거
    if (dateString.endsWith('.')) {
        dateString = dateString.slice(0, -1); // 마지막 문자 제거
    }

    const hours = String(now.getHours()).padStart(2, '0'); // 시
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 분
    const seconds = String(now.getSeconds()).padStart(2, '0'); // 초
    const timeString = `${hours}:${minutes}:${seconds}`; // 시간 문자열 생성

    // 날짜와 시간을 결합
    const dateTimeString = `날짜 : ${dateString}  시간 : ${timeString}`;

    // 모든 슬라이드에 날짜와 시간 업데이트
    const timeDisplays = document.querySelectorAll('.time-display');
    timeDisplays.forEach(display => {
        display.textContent = dateTimeString; // 날짜와 시간 표시
    });
}

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

// 페이지 로드 시 시간 초기화
updateTime();
