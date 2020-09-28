$(function(){
	nav();
	$(window).scroll(function(){
		nav();
	});
	$('.nav>div').click(function(){
		var index=$(this).index();
		$('html').animate({
			scrollTop:$('.wrapper>div').eq(index).offset().top
		});
	});
	function nav(){
		if($(document).scrollTop()>=$('.green').offset().top){
			$('.nav').fadeIn('normal','linear',0.1);
		}else{
			$('.nav').fadeOut('normal','linear',0.1);
		};
	}
});