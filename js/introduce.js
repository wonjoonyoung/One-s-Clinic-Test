



document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTabId = 'introduce-introduce-bar-contents__tab1';
    showContent(defaultTabId);

    const rightBtn = document.querySelector('.introduce-introduce-bar-tex__btn__right');
    rightBtn.addEventListener('click', function() {
        const tabId = 'introduce-introduce-bar-contents__tab2';
        showContent(tabId);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step2').classList.add('active');
    });






    // 각 탭을 클릭할 때의 동작
    const tabs = document.querySelectorAll('.introduce-introduce-bar__step-warp');
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
    const defaultTabButton = document.querySelector(`.introduce-introduce-bar__step-warp[onclick="showContent('${defaultTabId}')"]`);
    if (defaultTabButton) {
        defaultTabButton.classList.add('active');
    }
});

function showContent(tabId) {
    // 모든 탭 내용 감추기
    const tabContents = document.querySelectorAll('.introduce-introduce-bar-contents');
    tabContents.forEach(content => content.classList.remove('active'));

    // 선택한 탭에 해당하는 내용 표시
    const selectedTabContent = document.getElementById(tabId);
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
    }
}



    // 모달 트리거 요소
    const modalTrigger = document.getElementById('modalTrigger1');

    // 모달 요소
    const modal = document.getElementById('myModal1');

    // 모달을 닫는 요소 (X 버튼)
    const closeBtn = document.getElementById('closeBtn');

    // 클릭 이벤트 리스너 등록
    if (modalTrigger && closeBtn) {
        modalTrigger.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        // 모달을 닫는 이벤트 리스너 등록
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // 모달 외부를 클릭했을 때도 모달이 닫히도록 설정
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('modalTrigger 또는 closeBtn 요소를 찾을 수 없습니다.');
    };

