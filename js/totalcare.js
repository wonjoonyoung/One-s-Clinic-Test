const topMenu = document.getElementById("top-menu");
const middleMenu = document.getElementById("middle-menu");
const middleMenuTop = middleMenu.offsetTop;
const middleMenuHeight = middleMenu.offsetHeight;



// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;

    // 스크롤 위치가 요소의 초기 위치 이상이면 "fixed" 클래스 추가
    if (scrollPosition >= middleMenuTop) {
        middleMenu.classList.add("fixed");
        topMenu.classList.add("fixed");


        // middleMenu 높이만큼 다음 컨텐츠를 내림
        document.body.style.paddingTop = "150px";

    } else {
        // 스크롤 위치가 요소의 초기 위치 미만이면 "fixed" 클래스 제거
        middleMenu.classList.remove("fixed");
        topMenu.classList.remove("fixed");

        document.body.style.paddingTop = "0";

    }
});
