



document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTabId = 'introduce-introduce-bar-contents__tab1';
    showContent(defaultTabId);

    const rightBtn = document.querySelector('.introduce-introduce-bar-tex__btn__right1');
    rightBtn.addEventListener('click', function() {
        const tabId = 'introduce-introduce-bar-contents__tab2';
        showContent(tabId);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step2').classList.add('active');
    }
    );


    
    const lefttBtn = document.querySelector('.introduce-introduce-bar-tex__btn__left1');
    
    lefttBtn.addEventListener('click', function() {
        const tabIdLeft = 'introduce-introduce-bar-contents__tab6';
        showContent(tabIdLeft);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step6').classList.add('active');
    }
    
    );


    ////////

    const rightBtn2 = document.querySelector('.introduce-introduce-bar-tex__btn__right2');
    rightBtn2.addEventListener('click', function() {
        const tabId2 = 'introduce-introduce-bar-contents__tab3';
        showContent(tabId2);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step3').classList.add('active');
    }
    );


    
    const lefttBtn2 = document.querySelector('.introduce-introduce-bar-tex__btn__left2');
    
    lefttBtn2.addEventListener('click', function() {
        const tabIdLeft2 = 'introduce-introduce-bar-contents__tab1';
        showContent(tabIdLeft2);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step1').classList.add('active');
    }
    
    );

    ///////

    const rightBtn3 = document.querySelector('.introduce-introduce-bar-tex__btn__right3');
    rightBtn3.addEventListener('click', function() {
        const tabId3 = 'introduce-introduce-bar-contents__tab4';
        showContent(tabId3);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step4').classList.add('active');
    }
    );


    
    const lefttBtn3 = document.querySelector('.introduce-introduce-bar-tex__btn__left3');
    
    lefttBtn3.addEventListener('click', function() {
        const tabIdLeft3 = 'introduce-introduce-bar-contents__tab2';
        showContent(tabIdLeft3);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step2').classList.add('active');
    }
    
    );

    //////

    const rightBtn4 = document.querySelector('.introduce-introduce-bar-tex__btn__right4');
    rightBtn4.addEventListener('click', function() {
        const tabId4 = 'introduce-introduce-bar-contents__tab5';
        showContent(tabId4);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step5').classList.add('active');
    }
    );


    
    const lefttBtn4 = document.querySelector('.introduce-introduce-bar-tex__btn__left4');
    
    lefttBtn4.addEventListener('click', function() {
        const tabIdLeft4 = 'introduce-introduce-bar-contents__tab3';
        showContent(tabIdLeft4);

        // 선택된 탭에 border 추가
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // .step2에 active 클래스 추가
        document.querySelector('.step3').classList.add('active');
    }
    
    );


        //////

        const rightBtn5 = document.querySelector('.introduce-introduce-bar-tex__btn__right5');
        rightBtn5.addEventListener('click', function() {
            const tabId5 = 'introduce-introduce-bar-contents__tab6';
            showContent(tabId5);
    
            // 선택된 탭에 border 추가
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
    
            // .step2에 active 클래스 추가
            document.querySelector('.step6').classList.add('active');
        }
        );
    
    
        
        const lefttBtn5 = document.querySelector('.introduce-introduce-bar-tex__btn__left5');
        
        lefttBtn5.addEventListener('click', function() {
            const tabIdLeft5 = 'introduce-introduce-bar-contents__tab4';
            showContent(tabIdLeft5);
    
            // 선택된 탭에 border 추가
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
    
            // .step2에 active 클래스 추가
            document.querySelector('.step4').classList.add('active');
        }
        
        );



        //////

        const rightBtn6 = document.querySelector('.introduce-introduce-bar-tex__btn__right6');
        rightBtn6.addEventListener('click', function() {
            const tabId6 = 'introduce-introduce-bar-contents__tab1';
            showContent(tabId6);
    
            // 선택된 탭에 border 추가
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
    
            // .step2에 active 클래스 추가
            document.querySelector('.step1').classList.add('active');
        }
        );
    
    
        
        const lefttBtn6 = document.querySelector('.introduce-introduce-bar-tex__btn__left6');
        
        lefttBtn6.addEventListener('click', function() {
            const tabIdLeft6 = 'introduce-introduce-bar-contents__tab5';
            showContent(tabIdLeft6);
    
            // 선택된 탭에 border 추가
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
    
            // .step2에 active 클래스 추가
            document.querySelector('.step5').classList.add('active');
        }
        
        );
    






    // 여기 버튼 컨트롤 영역



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
    const modalTrigger2 = document.getElementById('modalTrigger2');
    const modalTrigger3 = document.getElementById('modalTrigger3');
    const modalTrigger4 = document.getElementById('modalTrigger4');
    const modalTrigger5 = document.getElementById('modalTrigger5');
    const modalTrigger6 = document.getElementById('modalTrigger6');
    const modalTrigger7 = document.getElementById('modalTrigger7');

    // 모달 요소
    const modal = document.getElementById('myModal1');
    const modal2 = document.getElementById('myModal2');
    const modal3 = document.getElementById('myModal3');
    const modal4 = document.getElementById('myModal4');
    const modal5 = document.getElementById('myModal5');
    const modal6 = document.getElementById('myModal6');
    const modal7 = document.getElementById('myModal7');

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

    
    if (modalTrigger2 && closeBtn2) {
        modalTrigger2.addEventListener('click', function () {
            modal2.style.display = 'block';
        });

        // 모달을 닫는 이벤트 리스너 등록
        closeBtn2.addEventListener('click', function () {
            modal2.style.display = 'none';
        });

        // 모달 외부를 클릭했을 때도 모달이 닫히도록 설정
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal2.style.display = 'none';
            }
        });
    } else {
        console.error('modalTrigger 또는 closeBtn 요소를 찾을 수 없습니다.');
    };



    if (modalTrigger3 && closeBtn3) {
        modalTrigger3.addEventListener('click', function () {
            modal3.style.display = 'block';
        });

        // 모달을 닫는 이벤트 리스너 등록
        closeBtn3.addEventListener('click', function () {
            modal3.style.display = 'none';
        });

        // 모달 외부를 클릭했을 때도 모달이 닫히도록 설정
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal3.style.display = 'none';
            }
        });
    } else {
        console.error('modalTrigger 또는 closeBtn 요소를 찾을 수 없습니다.');
    };


    if (modalTrigger4 && closeBtn4) {
        modalTrigger4.addEventListener('click', function () {
            modal4.style.display = 'block';
        });

        // 모달을 닫는 이벤트 리스너 등록
        closeBtn4.addEventListener('click', function () {
            modal4.style.display = 'none';
        });

        // 모달 외부를 클릭했을 때도 모달이 닫히도록 설정
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal4.style.display = 'none';
            }
        });
    } else {
        console.error('modalTrigger 또는 closeBtn 요소를 찾을 수 없습니다.');
    };


    if (modalTrigger5 && closeBtn5) {
        modalTrigger5.addEventListener('click', function () {
            modal5.style.display = 'block';
        });

        // 모달을 닫는 이벤트 리스너 등록
        closeBtn5.addEventListener('click', function () {
            modal5.style.display = 'none';
        });

        // 모달 외부를 클릭했을 때도 모달이 닫히도록 설정
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal5.style.display = 'none';
            }
        });
    } else {
        console.error('modalTrigger 또는 closeBtn 요소를 찾을 수 없습니다.');
    };


    if (modalTrigger6 && closeBtn6) {
        modalTrigger6.addEventListener('click', function () {
            modal6.style.display = 'block';
        });

        // 모달을 닫는 이벤트 리스너 등록
        closeBtn6.addEventListener('click', function () {
            modal6.style.display = 'none';
        });

        // 모달 외부를 클릭했을 때도 모달이 닫히도록 설정
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal6.style.display = 'none';
            }
        });
    } else {
        console.error('modalTrigger 또는 closeBtn 요소를 찾을 수 없습니다.');
    };


    if (modalTrigger7 && closeBtn7) {
        modalTrigger7.addEventListener('click', function () {
            modal7.style.display = 'block';
        });

        // 모달을 닫는 이벤트 리스너 등록
        closeBtn7.addEventListener('click', function () {
            modal7.style.display = 'none';
        });

        // 모달 외부를 클릭했을 때도 모달이 닫히도록 설정
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal7.style.display = 'none';
            }
        });
    } else {
        console.error('modalTrigger 또는 closeBtn 요소를 찾을 수 없습니다.');
    };