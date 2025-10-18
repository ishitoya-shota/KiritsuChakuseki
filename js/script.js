$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 880){
		var headerH =20;
	}
	else{
		var headerH =60;
	}
	
	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

});

// 対応一覧No2 スプラッシュ画面の追加 Add --->
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('wrapper'); // ← wrapperに変更！

  // 最初は wrapper を非表示にしておく
  main.style.display = 'none';

  // 4秒後にスプラッシュをフェードアウト
  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      main.style.display = 'block'; // ← ここで通常ページを表示
    }, 1000); // フェードアウト1秒分
  }, 4000);
});
// 対応一覧No2 スプラッシュ画面の追加 Add <---