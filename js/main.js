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

	if (window.location.search.includes('category')) {
		var param = window.location.search
		var value = param.substr(param.search(/category/)+9,1);
		$('.catalog-nav-list ul li a').removeClass('active');
		$($('.catalog-nav-list ul li a')[value-1]).addClass('active');
	} else {
		$($('.catalog-nav-list ul li a')[0]).addClass('active');
	}

	$('.pagination a').click(function(event){
		event.preventDefault();
		var value;
		var getPage = function(elem){
			var start = $(elem).attr('href').search(/page/);
			var value = $(elem).attr('href').substr(start+5);
			return value;
		}
		if ($(this).attr('href').includes('prev')) {
			value = parseInt(getPage($('.pagination a.active')))-1;
			if (value == 0) { return }
		} else if ($(this).attr('href').includes('next')) {
			value = parseInt(getPage($('.pagination a.active')))+1;
			if (value == 6) { return }
		} else {
			value = getPage(this);
		}
		$('.pagination a').removeClass('active');
		$($('.pagination a')[value]).addClass('active');
	})
	
	$('#gallery-more').click(function(event){
		event.preventDefault()
		$('#gallery-more .icon-spinner').toggleClass('spin')
	});

});