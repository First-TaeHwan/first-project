// 메인 텍스트 작성과 삭제 즉시 실행 함수
(function () {
  const spanEl = document.querySelector("main h2 span");
  const txtArr = ["TeaHwan", "박 태 환"];
  let index = 0;
  let currenTxt = txtArr[index].split("");

  function writeTxt() {
    spanEl.textContent += currenTxt.shift();
    if (currenTxt.length !== 0) {
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      currenTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }

  function deleteTxt() {
    currenTxt.pop();
    spanEl.textContent = currenTxt.join("");
    if (currenTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      index = (index + 1) % txtArr.length;
      currenTxt = txtArr[index].split("");
      writeTxt();
    }
  }

  writeTxt();
})();

//  수직 스크롤 발생시 헤더 태그 엑티브 클래스 추가 및 삭제
(function () {
  const headerEl = document.querySelector("header");
  window.addEventListener("scroll", function () {
    requestAnimationFrame(scrollCheck);
  });

  function scrollCheck() {
    const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
      headerEl.classList.add("active");
    } else {
      headerEl.classList.remove("active");
    }
  }
})();

// 애니메이션 스크롤
(function () {
  const animationMove = function (selector) {
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    console.log(target);
  };

  const scrollMoveEl = document.querySelectorAll(
    "[data-animation-scroll='true']"
  );
  for (let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener("click", function (e) {
      console.log(this.dataset.target);
      animationMove(this.dataset.target);
    });
  }
})();
