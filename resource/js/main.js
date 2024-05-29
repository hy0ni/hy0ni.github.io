//*************************************************
// # 전역 변수
//*************************************************
const active = 'is-active';
const $gnb_load = $('[data-include=gnb]');


//*************************************************
// # 문서 로드 후 실행 영역
//*************************************************
window.addEventListener('DOMContentLoaded', () => {
  // ajax load 
  $.ajaxSetup({
    method: "GET", // HTTP 요청 메소드(GET, POST 등)
    dataType: "html" // 서버에서 보내줄 데이터의 타입
  });

  $.ajax({
    url: "include/gnb.html", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
  }).done(html => {
    $gnb_load.append(html);
  })

  resizeCheck();
})


//*************************************************
// # vw setting / 모바일 리사이즈
//*************************************************
function resizeCheck() {

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
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
    $(window).resize(function () {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', vh + 'px');
    });
  }


}
//*************************************************
// # 모바일 기기 전용 
//*************************************************
let UserAgent = navigator.userAgent;
function mobileCheck() {
  if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return true;
  } else {
    return false;
  }
}
