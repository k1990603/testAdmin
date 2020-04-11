;(function () {
	
	'use strict';

	var loadAction = function() {
		let country = window.localStorage.getItem('country')
		$("#nav").load("bundle/header.html", function(){ 
			if(!country || country === 'zh') {
				$(".gtco-nav .menu-1>ul>li").eq(0).children("a").html("首页")
				$(".gtco-nav .menu-1>ul>li").eq(1).children("a").html("关于我们")
				$(".gtco-nav .menu-1>ul>li").eq(2).children("a").html("产品介绍")
				$(".gtco-nav .menu-1>ul>li").eq(3).children("a").html("合作申请")
				// $("#nav").load("page/zh/header.html", function(){ allAction() })
				$("#cooperation").load("page/zh/cooperation.html", function(){ allAction() })
				$("#gtco-footer").load("page/zh/footer.html", function(){ allAction() })
				$("#home").load("page/zh/home.html", function(){ allAction() })
				$("#about").load("page/zh/about.html", function(){ allAction() })
				$("#contact").load("page/zh/contact.html", function(){ allAction() })
				$("#portfolio").load("page/zh/portfolio.html", function(){ allAction() })
			} else if(country === 'en'){
				$(".gtco-nav .menu-1>ul>li").eq(0).children("a").html("Home")
				$(".gtco-nav .menu-1>ul>li").eq(1).children("a").html("About")
				$(".gtco-nav .menu-1>ul>li").eq(2).children("a").html("Product")
				$(".gtco-nav .menu-1>ul>li").eq(3).children("a").html("Contact")
				// $("#nav").load("page/en/header.html", function(){ allAction() })
				$("#cooperation").load("page/en/cooperation.html", function(){ allAction() })
				$("#gtco-footer").load("page/en/footer.html", function(){ allAction() })
				$("#home").load("page/en/home.html", function(){ allAction() })
				$("#about").load("page/en/about.html", function(){ allAction() })
				$("#contact").load("page/en/contact.html", function(){ allAction() })
				$("#portfolio").load("page/en/portfolio.html", function(){ allAction() })
			} else {
				$(".gtco-nav .menu-1>ul>li").eq(0).children("a").html("الصفحة الرئيسية")
				$(".gtco-nav .menu-1>ul>li").eq(1).children("a").html("معلومات عنا")
				$(".gtco-nav .menu-1>ul>li").eq(2).children("a").html("مقدمة المنتج")
				$(".gtco-nav .menu-1>ul>li").eq(3).children("a").html("الاتصال بنا")
				// $("#nav").load("page/uae/header.html", function(){ allAction() })
				$("#cooperation").load("page/uae/cooperation.html", function(){ allAction() })
				$("#gtco-footer").load("page/uae/footer.html", function(){ allAction() })
				$("#home").load("page/uae/home.html", function(){ allAction() })
				$("#about").load("page/uae/about.html", function(){ allAction() })
				$("#contact").load("page/uae/contact.html", function(){ allAction() })
				$("#portfolio").load("page/uae/portfolio.html", function(){ allAction() })
			}
			allAction() })
	}

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							},  k * 200, 'easeInOutExpo' );
						});
						
					}, 100);
					
				}

			} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function(){
		
		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});


		

	};

	var tabs = function() {

		// Auto adjust height
		$('.gtco-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.gtco-tab-content-wrap'),
					tabHeight = $('.gtco-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.gtco-tab-content-wrap'),
						tabHeight = $('.gtco-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.gtco-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.tab-content')
				.removeClass('active');

			$('.gtco-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.gtco-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#gtco-counter').length > 0 ) {
			$('#gtco-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var allAction = function() {
		$("#cn").click(function(){
			window.localStorage.setItem('country', 'zh');
			$(".gtco-nav .menu-1>ul>li").eq(0).children("a").html("首页")
				$(".gtco-nav .menu-1>ul>li").eq(1).children("a").html("关于我们")
				$(".gtco-nav .menu-1>ul>li").eq(2).children("a").html("产品介绍")
				$(".gtco-nav .menu-1>ul>li").eq(3).children("a").html("合作申请")
		  $("#cooperation").load("page/zh/cooperation.html", function(){ allAction() })
		  $("#gtco-footer").load("page/zh/footer.html", function(){ allAction() })
		  $("#home").load("page/zh/home.html", function(){ allAction() })
		  $("#about").load("page/zh/about.html", function(){ allAction() })
		  $("#contact").load("page/zh/contact.html", function(){ allAction() })
		  $("#portfolio").load("page/zh/portfolio.html", function(){ allAction() })
		})
		$("#English").click(function(){
		  window.localStorage.setItem('country', 'en');
		  $(".gtco-nav .menu-1>ul>li").eq(0).children("a").html("Home")
				$(".gtco-nav .menu-1>ul>li").eq(1).children("a").html("About")
				$(".gtco-nav .menu-1>ul>li").eq(2).children("a").html("Product")
				$(".gtco-nav .menu-1>ul>li").eq(3).children("a").html("Contact")
		  $("#cooperation").load("page/en/cooperation.html", function(){ allAction() })
		  $("#gtco-footer").load("page/en/footer.html", function(){ allAction() })
		  $("#home").load("page/en/home.html", function(){ allAction() })
		  $("#about").load("page/en/about.html", function(){ allAction() })
		  $("#contact").load("page/en/contact.html", function(){ allAction() })
		  $("#portfolio").load("page/en/portfolio.html", function(){ allAction() })
		})
		$("#uae").click(function(){
		  window.localStorage.setItem('country', 'uae');
		  $(".gtco-nav .menu-1>ul>li").eq(0).children("a").html("الصفحة الرئيسية")
				$(".gtco-nav .menu-1>ul>li").eq(1).children("a").html("معلومات عنا")
				$(".gtco-nav .menu-1>ul>li").eq(2).children("a").html("مقدمة المنتج")
				$(".gtco-nav .menu-1>ul>li").eq(3).children("a").html("الاتصال بنا")
		  $("#cooperation").load("page/uae/cooperation.html", function(){ allAction() })
		  $("#gtco-footer").load("page/uae/footer.html", function(){ allAction() })
		  $("#home").load("page/uae/home.html", function(){ allAction() })
		  $("#about").load("page/uae/about.html", function(){ allAction() })
		  $("#contact").load("page/uae/contact.html", function(){ allAction() })
		  $("#portfolio").load("page/uae/portfolio.html", function(){ allAction() })
		})
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		tabs();
		goToTop();
		loaderPage();
		counterWayPoint();
	}
	$(function(){
		loadAction();
		// setTimeout(()=>{
			
		// },1000)
		
	});


}());