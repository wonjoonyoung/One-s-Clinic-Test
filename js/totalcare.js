document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTotalTabId = 'totalcare-tab1';
    const tabContents = document.querySelectorAll('.totalcare-aging-clinic-program_grade_contents');

    showTotalContent(defaultTotalTabId);

    // 각 탭을 클릭할 때의 동작
    const Totaltabs = document.querySelectorAll('.introduce-introduce-list-warp');
    Totaltabs.forEach(Totaltab => {
        Totaltab.addEventListener('click', function () {
            const TotaltabId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showTotalContent(TotaltabId);

            // 선택된 탭에 border 추가
            Totaltabs.forEach(Totaltab => {
                Totaltab.classList.remove('active');

            });
            
            this.classList.add('active');
        });
    });


    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTotalTabButton = document.querySelector(`.introduce-introduce-list-warp[onclick="showTotalContent('${defaultTotalTabId}')"]`);
    console.log(defaultTotalTabButton); // 확인용 로그
    
    if (defaultTotalTabButton) {
        defaultTotalTabButton.classList.add('active');
    }
    
});

function showTotalContent(TotaltabId) {
    const tabTotalContents = document.querySelectorAll('.introduce-introduce-list-warp');
    // tabTotalContents.forEach(content => content.classList.remove('active'));

    // 선택한 탭에 해당하는 내용 표시
    const selectedTotalTabContent = document.getElementById(TotaltabId);
    if (selectedTotalTabContent) {
        selectedTotalTabContent.classList.remove('remove');

    const allTotalTabs = document.querySelectorAll('.totalcare-aging_contents');
    allTotalTabs.forEach(tab => {
        if (tab !== selectedTotalTabContent) {
            tab.classList.add('remove');
        }
    });



    }
}

const tabContentBasic = document.querySelectorAll('.totalcare-introduce-list-warp');

function basic(event) {
    const basicSelected = document.querySelectorAll('.basic');
    basicSelected.forEach(item => {
        item.classList.add('active');
    });

    // 클릭된 요소에 'active' 클래스 추가
    event.target.classList.add('active');
}

tabContentBasic.forEach(tab => {
    tab.addEventListener('click', basic);
});




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






document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTabId2 = 'totalcare-diet-clinic-program_grade-tab1';
    showContent2(defaultTabId2);

    // 각 탭을 클릭할 때의 동작
    const tabs2 = document.querySelectorAll('.grade');
    tabs2.forEach(tab2 => {
        tab2.addEventListener('click', function () {
            const tabId2 = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent2(tabId2);

            // 선택된 탭에 border 추가
            tabs2.forEach(tab2 => {
                tab2.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTabButton2 = document.querySelector(`.grade[onclick="showContent2('${defaultTabId2}')"]`);
    if (defaultTabButton2) {
        defaultTabButton2.classList.add('active');
    }
});

function showContent2(tabId2) {
    // 모든 탭 내용 감추기
    const tabContents2 = document.querySelectorAll('.totalcare-diet-clinic-program_grade_contents');
    tabContents2.forEach(content2 => content2.classList.remove('active'));
    
    // 선택한 탭에 해당하는 내용 표시
    const selectedTabContent2 = document.getElementById(tabId2);
    if (selectedTabContent2) {
        selectedTabContent2.classList.add('active');
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
