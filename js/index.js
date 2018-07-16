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

