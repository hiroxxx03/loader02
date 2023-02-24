$(function () {
  let h = $(window).height();
  $('#wrap').toggle();
  $('.loader01').height(h).toggle();
  $('loader01-inner').height(h).toggle();
});

$(window).on('load', function () { //全ての読み込みが完了したら実行
  $('.loader01').delay(2000).queue(function () {
    $(this).toggleClass('is-out')
  });
  $('.loader01-logo-img').delay(1700).queue(function () {
    $(this).toggleClass('is-out');
  });
  $('#wrap').css('display', 'block');
});

// 3.4秒たったら強制的にロード画面を非表示
$(function () {
  function stopLoad() {
    $('#wrap').css('display', 'block');
    function otherPage() {
      $('.loader01, .loader01-inner').toggle();
      $('.loader01, .loader01-logo-img').toggleClass('is-out')
    }
    otherPage();
  }
  setTimeout(stopLoad, 3400);
})

// ページ遷移
$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    // alert(url);
    if (url === '../index.html') {
      $('#wrap').toggle();
      $('.loader01').toggle();
      $('.loader01-inner').toggle();
      $('.loader01').toggleClass('is-in-ini');
      // $('.loader01').css('background-color', '#fff');
      // $('.loader01-logo-img').css('color', '#000');
      function isIn(){
          function isIn01(){
            $('.loader01-logo-img').toggleClass('is-in01-ini');
          }
          function isIn00(){
          $('.loader01-logo-img').toggleClass('is-in00-ini')
          }
          isIn01();
          setTimeout(isIn00, 650)
        }
      isIn();
      // $('.loader01-logo-img').toggleClass('is-in');
      setTimeout(function(){
        window.location = '../index.html';
      }, 1900);
      // // ページのロードが終わった後の処理
      // $(window).load(url, (function(){
      //   alert('aaa');
      //   $('.loader01').delay(2000).queue(function () {
      //     $(this).toggleClass('is-out')
      //   });
      //   $('.loader01-logo-img').delay(1700).queue(function () {
      //     $(this).toggleClass('is-out');
      //   });
      // }));
    }else if (url !== '') {
      $('#wrap').toggle();
      $('.loader01').toggle();
      $('.loader01-inner').toggle();
      $('.loader01').toggleClass('is-in');
      function isIn(){
          function isIn01(){
            $('.loader01-logo-img').toggleClass('is-in01');
          }
          function isIn00(){
            $('.loader01-logo-img').toggleClass('is-in00')
          }
          isIn01();
          setTimeout(isIn00, 650)
        }
      isIn();
      // $('.loader01-logo-img').toggleClass('is-in');
      setTimeout(function(){
        window.location = url;
      }, 1900);
    }
    return false;
  });
});
