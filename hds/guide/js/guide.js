$(function($){
	$('.btn-history').popover('toggle');
	$('.btn-history').popover('hide');

	var noLink = $('.page-list tr td:has(.not-yet)');
	noLink.prev().prev().find('a').attr('href','#none').addClass('no-link');

	$('a').click(function(){
		if($(this).attr('href') == '#none'){
			return false;
		}
	})
	var dw = $(document).width();
	var dh = $(document).height();
	$('.overlay').css({'height':dh}, {'width':dw});

	// to top
	var scrollDiv = document.createElement('div');
	$(scrollDiv).attr('id', 'toTop').html('<a href="#none">↑ 처음으로 이동</a>').appendTo('body');
	$(window).scroll(function(){
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function(){
		$('body,html').animate({scrollTop: 0},	600);
	});
	$('.overlay').click(function(){
		$('.dNotice').hide(200); $('.overlay').fadeOut();
	})
});
$(window).ready(function(e) {
	//--total
	var total=$('tbody tr:not(.del, .link, .noHtml) td ul').length;
	var complete=$('tbody tr:not(.del, .link, .noHtml) td .hisList').length;
	var per = (complete/total*100).toFixed(1);

	$('.siteInfo dd span').eq(0).text(total + 'p');
	$('.siteInfo dd span').eq(1).text(complete + 'p');
	$('.siteInfo dd span').eq(2).text(per + '%');
	//--total end
	subCate();
});