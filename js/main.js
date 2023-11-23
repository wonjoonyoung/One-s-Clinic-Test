


document.addEventListener('DOMContentLoaded', function () {


    const mainHero = document.getElementsByClassName('main-hero')[0];
    const mainHeroInfo = document.querySelector('.main-hero-info');
    const mainHeroInfoSroll = document.querySelector('.main-hero-info__scroll');
    const mainHeader = document.querySelector('.header');
    const headrNavA = document.querySelectorAll('.header-nav a');
    const headrNavLogo = document.querySelector('.header-logo a img');

    let ticking = false;

    if (mainHero) {
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    syncScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    } else {
        console.error('Element with class "main-hero" not found.');
    }
});

function syncScroll() {
    const mainHero = document.getElementsByClassName('main-hero')[0];
    const mainHeroInfo = document.querySelector('.main-hero-info');
    const mainHeroInfoSroll = document.querySelector('.main-hero-info__scroll');
    const mainHeader = document.querySelector('.header');
    const headrNavA = document.querySelectorAll('.header-nav a');
    const headrNavLogo = document.querySelector('.header-logo a img');




    if (mainHero && window.scrollY > 0) {
        mainHero.style.height = '80vh';
        mainHero.style.width = '98vw';
        mainHero.style.borderRadius = '28px';
        mainHero.style.marginTop = '86px';
    }

    if (mainHeroInfo && window.scrollY > 0) {
        mainHeroInfo.style.bottom = '6vh';
    }

    if (mainHeroInfoSroll && window.scrollY > 0) {
        mainHeroInfoSroll.style.display = 'none';
    }

    if (mainHeader && window.scrollY > 0) {
        mainHeader.style.backgroundColor = 'var(--bg)'
    }
    if (headrNavLogo && window.scrollY > 0) {
        headrNavLogo.src = 'img/png/header/logo_bg.png';
    }
    if (headrNavA && window.scrollY > 0) {
         headrNavA.forEach(link => {
            link.style.color = 'var(--header_il)';
            link.addEventListener('mouseenter', function () {
                link.style.color = 'var(--header_il_hover_scrolled)';
                link.style.borderBottom = '2px solid var(--header_il)';
            });
            link.addEventListener('mouseleave', function () {
                link.style.color = 'var(--header_il)';
                link.style.borderBottom = 'none';
            });
        });
    }
    
}




document.addEventListener('DOMContentLoaded', function () {
    const mainIntroduce = document.querySelector('.main-introduce');
    const targetY800 = 800; // 첫 번째 요소의 원하는 Y값 설정

    const mainIntroduceGraphic = document.querySelector('.main-introduce-graphic');
    const targetY600 = 600; // 두 번째 요소의 원하는 Y값 설정

    const functionalIntroduce = document.querySelector('.functional-introduce');
    const targetY580 = 590; 

    const functionalIntroduceList = document.querySelector('.functional-introduce-list');
    const targetY560 = 560; 

    const totalcareIntroduce = document.querySelector('.totalcare-introduce');
    const targetY520 = 520; 

    const totalcareIntroduceList = document.querySelector('.totalcare-introduce-list');
    const totalcareIntroduceListBtn = document.querySelector('.totalcare-introduce-list-btn');
    const targetY500 = 510; 


    function fadeInElement(element, targetY) {
        const elementTop = element.getBoundingClientRect().top;

        // 특정 위치에 스크롤이 도달하면 visible 클래스를 추가하여 페이드인 효과 부여
        if (elementTop < targetY) {
            element.classList.add('visible');
        }
    }

    function handleScroll() {
        fadeInElement(mainIntroduce, targetY800);
        fadeInElement(mainIntroduceGraphic, targetY600);
        fadeInElement(functionalIntroduce, targetY580);
        fadeInElement(functionalIntroduceList, targetY560);
        fadeInElement(totalcareIntroduce, targetY520);
        fadeInElement(totalcareIntroduceList, targetY500);
        fadeInElement(totalcareIntroduceListBtn, targetY500);




        // 모든 페이드인이 완료되었을 때 스크롤 이벤트 제거
        if (
            mainIntroduce.classList.contains('visible') &&
            mainIntroduceGraphic.classList.contains('visible') &&
            functionalIntroduce.classList.contains('visible') &&
            functionalIntroduceList.classList.contains('visible') &&
            totalcareIntroduce.classList.contains('visible') &&
            totalcareIntroduceList.classList.contains('visible') &&
            totalcareIntroduceListBtn.classList.contains('visible')

        ) {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // 스크롤 이벤트 발생 시 handleScroll 함수 호출
    window.addEventListener('scroll', handleScroll);

    // 페이지 로드 시에도 확인하여 초기 페이드인 처리
    handleScroll();
});



document.addEventListener('DOMContentLoaded', function () {
    const contentItems = document.querySelector('.media-introduce-media__content-items');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const itemWidth = document.querySelector('.media-introduce-media__content-item').offsetWidth;
    
    const items = document.querySelectorAll('.media-introduce-media__content-item');
    const totalItems = items.length;

    // 클론 생성
    const clones = Array.from(items).map(item => item.cloneNode(true));
    contentItems.append(...clones);

    // 클론 포함한 전체 너비 설정
    const totalWidth = totalItems * itemWidth * 2;
    contentItems.style.width = totalWidth + 'px';
    contentItems.style.transform = 'translateX(' + (-itemWidth) + 'px)'; // 초기 위치로 이동

    let currentIndex = 1; // 초기 인덱스를 클론된 아이템 다음으로 설정
    let isAnimating = false;
    let intervalId;

    // 이전 버튼 클릭 이벤트
    prevBtn.addEventListener('click', function () {
        if (!isAnimating) {
            currentIndex--;
            handleTransition();
        }
    });

    // 다음 버튼 클릭 이벤트
    nextBtn.addEventListener('click', function () {
        if (!isAnimating) {
            currentIndex++;
            handleTransition();
        }
    });

    // 자동 슬라이딩 설정 (3초에 한 번씩)
    intervalId = setInterval(function () {
        if (!isAnimating) {
            currentIndex++;
            handleTransition();
        }
    }, 3000);

    // 슬라이더 트랜지션 관리 함수
    function handleTransition() {
        isAnimating = true;
        const newPosition = -currentIndex * itemWidth;
        contentItems.style.transition = 'transform 0.5s ease-in-out';
        contentItems.style.transform = 'translateX(' + newPosition + 'px)';

        // 트랜지션 종료 후 호출되는 콜백
        contentItems.addEventListener('transitionend', function () {
            if (currentIndex <= 0) {
                currentIndex = totalItems;
                contentItems.style.transition = 'none';
                contentItems.style.transform = 'translateX(' + (-currentIndex * itemWidth) + 'px)';
            } else if (currentIndex >= totalItems + 1) {
                currentIndex = 1;
                contentItems.style.transition = 'none';
                contentItems.style.transform = 'translateX(' + (-currentIndex * itemWidth) + 'px)';
            }
            isAnimating = false;
        });
    }
});





window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}