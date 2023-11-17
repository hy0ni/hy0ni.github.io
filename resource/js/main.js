// 전역 변수
const active = 'is-active';

(function () {

  /*************************************************
  * vw setting
  *************************************************/

  let vw = window.innerWidth;
  if (vw > 1280 || vw < 769 && vw > 360) {
    document.documentElement.style.setProperty('--vw', vw);
  } else {
    document.documentElement.style.removeProperty('--vw');
  }
  $(window).resize(function () {
    vw = window.innerWidth;
    if (vw > 1280 || vw < 769 && vw > 360) {
      document.documentElement.style.setProperty('--vw', vw);
    } else {
      document.documentElement.style.removeProperty('--vw');
    }
  });

  // 모바일 리사이즈
  if (mobileCheck() || $(window).width() < 1024) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
    $(window).resize(function () {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', vh + 'px');
    });
  }

}());