// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });

$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});