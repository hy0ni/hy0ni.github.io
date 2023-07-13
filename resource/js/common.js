/************************************************************
  # 전역 변수 
************************************************************/

const $gnb_load = $("[data-include=gnb]");
const $footer_load = $("[data-include=footer]");

/************************************************************
  # 문서 로드 후 실행 영역
************************************************************/
window.addEventListener('DOMContentLoaded', () => {
  $.ajaxSetup({
    method: "GET", // HTTP 요청 메소드(GET, POST 등)
    dataType: "html" // 서버에서 보내줄 데이터의 타입
  });

  $.ajax({
    url: "../include/gnb.html", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
  }).done(html => {
    $gnb_load.append(html);
    $.ajax({
      url: "../include/footer.html",
    }).done(html => {
      $footer_load.append(html);
    })
  });
});