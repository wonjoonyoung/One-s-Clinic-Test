

document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTotalTabId = 'totalcare-tab1';
    showContent(defaultTotalTabId);

    // 각 탭을 클릭할 때의 동작
    const totalTabs = document.querySelectorAll('.introduce-introduce-list-warp');
    totalTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const totalTabId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent(totalTabId);

            // 선택된 탭에 border 추가
            totalTabs.forEach(totalTab => {
                totalTab.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultToTalTabButton = document.querySelector(`.introduce-introduce-list-warp[onclick="showContent('${defaultTotalTabId}')"]`);
    if (defaultToTalTabButton) {
        defaultToTalTabButton.classList.add('active');
    }
});

function showContent(totalTabId) {
    // 모든 탭 내용 감추기
    const totalTabContents = document.querySelectorAll('.totalcare-aging_contents');
    totalTabContents.forEach(selectedTotalTabContent => {
        selectedTotalTabContent.classList.remove('active');
        selectedTotalTabContent.classList.add('remove');
    });

    // 선택한 탭에 해당하는 내용 표시
    const selectedTotalTabContent = document.getElementById(totalTabId);
    if (selectedTotalTabContent) {
        selectedTotalTabContent.classList.add('active');
        selectedTotalTabContent.classList.remove('remove');
    }
}






document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTabId = 'totalcare-aging-clinic-program_grade-tab1';
    showContent(defaultTabId);

    // 각 탭을 클릭할 때의 동작
    const tabs = document.querySelectorAll('.grade');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent(tabId);

            // 선택된 탭에 border 추가
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTabButton = document.querySelector(`.grade[onclick="showContent('${defaultTabId}')"]`);
    if (defaultTabButton) {
        defaultTabButton.classList.add('active');
    }
});

function showContent(tabId) {
    // 모든 탭 내용 감추기
    const tabContents = document.querySelectorAll('.totalcare-aging-clinic-program_grade_contents');
    tabContents.forEach(content => content.classList.remove('active'));

    // 선택한 탭에 해당하는 내용 표시
    const selectedTabContent = document.getElementById(tabId);
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
    }
}



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
