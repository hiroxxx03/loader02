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
    if (url !== '') {
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

// $(function(){
//   //リンククリックの処理
//   $('a[href ^= "http://127.0.0.1:5500/jQuery/loader02/other_page/index.html"]' + 'a[target != "_blank"]').click(function(){
//     var url = $(this).attr('href'); // クリックされたリンクのURLを取得
//     $('#wrap').css('display', 'none');
//     $('.loader').height(h).css('display', 'block');
//     $('loader-inner').height(h).css('display', 'block');
//     $('.loader').delay(2000).queue(function () {
//       $(this).css('transform', 'translateY(100%) translateZ(0)')
//     });
//     $('.loader-logo-img').delay(1700).queue(function () {
//       $(this).css('transform', 'translateY(60%) translateZ(0)');
//     });
//     setTimeout(function(){ location.href = url; }, 3000); // URLにリンクする
//     return false;
// });
// });

// ページのロードが終わった後の処理
// $(window).load(function(){
//     $('.loader01').delay(2000).queue(function () {
//       $(this).css('transform', 'translateY(-100%) translateZ(0)')
//     });
//     $('.loader01-logo-img').delay(1700).queue(function () {
//       $(this).css('transform', 'translateY(-60%) translateZ(0)');
//     });
//     $('#wrap').css('display', 'block');
// });

// // ページのロードが終わらなくても10秒たったら強制的に処理を実行
// $(function(){ setTimeout('stopLoad02()', 10000); });
// function stopLoad02(){
//   $('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
// }