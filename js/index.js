$(document).on('click', '#display_grid',function(){
	$('.filter__list .filter__link').removeClass('filter__link--active');
	$('.filter__list .filter__list-icon').removeClass('filter__list-icon--active');

	$('.filter__grid .filter__link').addClass('filter__link--active');
	$('.filter__grid .filter__grid-icon').addClass('filter__grid-icon--active');

	$('.catalog__pricelist').hide();
	$('.catalog__grid').show();
});

$(document).on('click', '#display_list',function(){
	$('.filter__list .filter__link').addClass('filter__link--active');
	$('.filter__list .filter__list-icon').addClass('filter__list-icon--active');

	$('.filter__grid .filter__link').removeClass('filter__link--active');
	$('.filter__grid .filter__grid-icon').removeClass('filter__grid-icon--active');



	$('.catalog__grid').hide();
	$('.catalog__pricelist').show();
});


$(window).on('scroll',function(){
	var x = $(window).scrollTop();
	var w = $(window).width();

	console.log(x);

	if(w > 1200 && x > 880 && x < 2400){
		$('.catalog__categories').addClass('catalog__categories--fixed');
			$('.catalog__categories').slideDown();
	}
	else if(w>1200 && x > 2400){
		$('.catalog__categories').slideDown();
		$('.catalog__categories').removeClass('catalog__categories--fixed');

	}
	else{
		$('.catalog__categories').show();
		$('.catalog__categories').removeClass('catalog__categories--fixed');
	}

})
