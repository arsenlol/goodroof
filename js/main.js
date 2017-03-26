$(document).ready(function(){
	$('.main-carousel').slick({
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 5000
	});
	$('.item-big-image-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.item-preview-carousel'
	});
	$('.item-preview-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.item-big-image-carousel',
		dots: false,
		focusOnSelect: true,
		prevArrow: '<div class="icon-arr_left"></div>',
		nextArrow: '<div class="icon-arr_right"></div>'
	});

	$('.item-big-image-carousel').magnificPopup({
		delegate: 'a',
	    type: 'image',
	    gallery:{
	      enabled:true
	    }
	});

	// Подобрать крышу
	$('input[name=rooftype]').change(function(){
		var index = $(this).parent().index();
		var src = $($('.choose-roof-images-hidden img')[index]).attr('src');
		$('.choose-roof-image img').attr('src', src);
	})

	$('.nav-toggle').click(function(){
		$('.top-nav nav ul').toggleClass('open');
	});

	$('.image-popup').magnificPopup({
	  type: 'image'
	});

	if($('.gal-item').length){
		$('.gal-item').each(function(index){
			$('.gal-item-'+index).magnificPopup({
		      type: 'image',
		        gallery:{enabled:true},
		        titleSrc: 'title'
		    });
		})

 		var galleryContainer = $('.gallery-tabs-container'),
 		buttons = galleryContainer.find('.gallery-tab'),
 		blocks = galleryContainer.find('.gallery-tab-block');
 		buttons.each(function(index){
 			$(this).click(function(){
 				buttons.removeClass('active');
 				$(this).addClass('active');
 				blocks.removeClass('active');
 				$(blocks[index]).addClass('active');
 			});
 		});
	}

});