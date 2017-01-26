// Eventify, Responsive HTML5 Event Template - Version 1.1 //

// Javascripts //
$(document).ready(function () {
	
        $('#print').click(function(){
            window.print();
        });

	window.islowheight = 1;
	/*if ($(window).height()<485) window.islowheight = 2;
	if(window.islowheight == 2){
		$('#menu-right').css('width', '500px');
		$('#menu-right').css('right', '-500px');
		$('#menu-right').css('font-size', '12px');
		$('#rightnav').css('float', 'left');
		$('#rightnav').css('width', '190px');
		$('.float-me-maybe').css('float', 'left');
		$('#rightnav').css('padding-top', '20px');
		$('#rightnav>li').css('line-height', '13px');
	}*/
	if($(window).width()>980){
		$("#rightnav li").slice(0,8).css('display','none');
	}
	$('#intro').height($(window).height());
	if($(window).width()<500){
		$('#intro').css('position','relative');
	}
	function showMenu(){
		$('.wrapper').css("left", "-180px");
		$('.navbar').css("right", "+=70px");
		$('#menu-right').css("right", "0");
		$('.logo').css("left", "+=180px");
		$('#menu-header-button').css("right", "+=250px");
		$('#country').css("right", "+=70px");
		$('.music-control').css("right", "+=70px");
		$('.site-overlay').fadeIn();
	};
	function hideMenu(){
		$('.wrapper').css("left", "0");
		$('.navbar').css("right", "-=70px");
		$('#menu-right').css("right", "-"+window.islowheight*250+"px");
		$('.logo').css("left", "0px");
		$('.site-overlay').hide();
		$('#menu-header-button').css("right", "-=250px");
		$('.music-control').css("right", "-=70px");
		$('#country').css("right", "-=70px");
	};

	$('.menu-right-close').click(function(e){
		e.preventDefault();
		hideMenu();
	});

        $('#menu-header-button a').click(function(e){
            e.preventDefault();
            showMenu();
	});
        $('.site-overlay').click(function(){
           hideMenu();
        });
        $("a[href='#mright']").click(function(e){
            e.preventDefault();
            showMenu();
	});
	// Top Bar //
	$('.top-bar nav').addClass('hidden');
	$('.menu-link').on('click', function (
		e) {
		e.preventDefault();
		$('.top-bar nav').toggleClass(
			'hidden');
	});


	$('#menu-right a.nav-about-type').click(function(e){
            e.preventDefault();
            if ($('#menu-right ul.back-about').css('display')=='none'){
            $('#menu-right ul.back-about').slideDown();
            $(this).parent().find('span').css('top','-5px');
            $(this).parent().find('span').html('-');
            }else{
                $('#menu-right ul.back-about').slideUp();
                $(this).parent().find('span').css('top','-2px');
                $(this).parent().find('span').html('+');
            }
	});

        $('body').on('click','#menu-right a.nav-guest-type',function(e){
            e.preventDefault();
            console.log(e);
            if ($('ul.back-guest').css('display')=='none'){
            $('ul.back-guest').slideDown();
            $(this).parent().find('span').css('top','-5px');
            $(this).parent().find('span').html('-');
            }else{
                $('ul.back-guest').slideUp();
                $(this).parent().find('span').css('top','-2px');
                $(this).parent().find('span').html('+');
            }
	});
//	$('#menu-right ul>li>a').click(function (e) {
//		var des = $(this).attr('href');
//		if($(des).length==0){
//			e.preventDefault();
//			window.location.href="/"+des;
//
//		}
//	});
	$('.nav-supage #mainnav a').click(function (e) {
		var des = $(this).attr('href');
		if($(des).length==0 && des!='#mright'){
			e.preventDefault();
			window.location.href="/"+des;

		}


	});

	$('.logo, .just-link,.header-lower-logo').click(function(){

		window.location.href=$(this).attr('href');
	});
//        $('.top-bar').onePageNav({
//		currentClass: 'current',
//		filter: ':not(.external)'
//	});
	// Local Scroll //
	$('#mainnav > li').localScroll({
		duration: 1000
	});
        $('#rightnav > li').localScroll({
		duration: 1000
	});
        $('#intro-scroll').localScroll({
		duration: 1000
	});


	// Calculate the viewport height //
	var viewHeight = $(window).height();
	$("#intro").css({
		'height': viewHeight
	});
	$(window).on('resize', function () {
		var viewHeight = $(window).height();
		$("#intro").css({
			'height': viewHeight
		});
	});

	// Flexslider
	// Can also be used with $(document).ready()
	$('.flexslider').flexslider({
		animation: "slide"
	});

	// Tabs //
	$('#schedule-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	})

	// Tooltip //
	$("[rel=tooltip]").tooltip();
	$("[data-rel=tooltip]").tooltip();

	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#venue').parallax("50%", 0.02);

	// Carousel //
	$(".speakers-carousel").carousel({
		dispItems: 1,
		direction: "horizontal",
		pagination: false,
		loop: false,
		autoSlide: false,
		autoSlideInterval: 5000,
		delayAutoSlide: 2000,
		effect: "slide",
		animSpeed: "slow"
	});

	// Toggle //
	$('.toggle-item-title').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass(
			'ui-state-active');
	});

	// Countdown //
	$('#countdown').countdown({
		until: new Date(2016, 6 - 1, 3,9), // new Date(year, mth - 1, day, hr, min, sec) - date/time to count down to
		// or numeric for seconds offset, or string for unit offset(s):
		// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
		// until: '-1m +1d', for demo
		timezone: +2, // The timezone (hours or minutes from GMT) for the target times, or null for client local
		layout: '{d<}<div class="span3"><div class="digit-container">{dn}<span class="label-container">Dni</span></div></div>{d>}{h<}<div class="span3"><div class="digit-container">{hn}<span class="label-container">Godzin</span></div></div>{h>}{m<}<div class="span3"><div class="digit-container">{mn}<span class="label-container">Minut</span></div></div>{m>}{s<}<div class="span3"><div class="digit-container">{sn}<span class="label-container">Sekund</span></div></div>{s>}',
		timeSeparator: '', // Separator for time periods
		isRTL: false, // True for right-to-left languages, false for left-to-right
		format: 'dHMS', // Format for display - upper case for always, lower case only if non-zero,
		// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
		alwaysExpire: true, // True to trigger onExpiry even if never counted down
		onExpiry: liftOff // Callback when the countdown expires -
		// receives no parameters and 'this' is the containing division
	});
	// Functions if countdown timer runs out:
	function liftOff() {
		$('.hasCountdown').css({
			display: 'none'
		});
		$('#countdown').addClass('hidden');
		$('#register-button').addClass('hidden');
		$('.register-title').addClass('hidden');
		$('.register-box').append('<h2>We are at capacity and can no longer accept registrations.</h2>');
		$('.register-box').append('<button class="btn btn-large btn-primary disabled" disabled="true" id="register-button">Sold Out</button>');
	}

	// Twitter Feed //
	$('.tweet').twittie({
		dateFormat: '%B %d, %Y',
		template: '<div class="date">{{date}}</div> {{tweet}}',
		count: 3, // define the number of tweets to be displayed, if it's one, read the lines below
		hideReplies: true
	});
	// if you want to display only one tweet, please remove the following lines:
	// if so, don't forget you need to change style.css line 1036 display property to display: block;
	setInterval(function () {
		var item = $('.tweet ul').find('li:first');
		item.animate({
			'opacity': '0'
		}, 1000, function () {
			$(this).detach().appendTo('.tweet ul').removeAttr('style');
		});
	}, 12000);

	// Contact Form //
	$('#contactform').validationEngine();

    // send the form by ajax when sumbitted
    $('#contactform').submit(function(e){
        e.preventDefault();
        var submitUrl = ajax_object.ajax_url;
		var data = {
			'action': 'contactmail',
			'notname': $('#contactform #contact_name').val(),
			'email': $('#contactform #contact_email').val(),
			'topic': $('#contactform #contact_subject').val(),
			'message': $('#contactform #contact_message').val(),
		};
			console.log(submitUrl);
        $.ajax({
            url: submitUrl,
            type: 'POST',
            data: data,
            beforeSend: function () {
                $('#submit').attr('disabled', 'disabled');
                $('#ErrorMsgs').fadeOut('slow').html('<div class="alert alert-info">Wysyłam...<a href="#" class="close">&times;</a></div>').fadeIn('slow');
            },
            success: function(data) {
				if(data=='true'){
					$('#contactform')[0].reset();
					$('#ErrorMsgs').html('<div class="alert alert-info">Wysłano!<a href="#" class="close">&times;</a></div>').fadeIn('slow');
				}else{
					$('#ErrorMsgs').html('<div class="alert alert-info">Błąd!<a href="#" class="close">&times;</a></div>').fadeIn('slow');
				}
                $('#submit').removeAttr('disabled');
            }
        });
        return false;
    });


	// Google Map //
	$('#map_canvas').gmap({
		'center': new google.maps.LatLng(52.2709227, 20.9674925), // Change this to your desired latitude and longitude
		'zoom': 16,
		'scrollwheel': false,
		'mapTypeControl': false,
		'navigationControl': false,
		'streetViewControl': false,
		'styles': [{
			stylers: [{
				gamma: 0.60
			}, {
				hue: "#5DBEB2"
			}, {
				invert_lightness: false
			}, {
				lightness: 2
			}, {
				saturation: -20
			}, {
				visibility: "on"
			}]
		}]
	});
	var image = {
		url: '/wp-content/themes/gasshow/images/marker.png', // Define the map marker file here
		// This marker is 51 pixels wide by 63 pixels tall.
		size: new google.maps.Size(51, 63),
		// The origin for this image is 0,0.
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at 26,63.
		anchor: new google.maps.Point(26, 63)
	};
	$('#map_canvas').gmap().bind('init', function () {
		$('#map_canvas').gmap('addMarker', {
			'id': 'marker-1',
			'position': '52.2709227, 20.9674925',
			'bounds': false,
			'icon': image
		}).click(function () {
			$('#map_canvas').gmap('openInfoWindow', {
				'content': '<h4>PixelHeaven 2016</h4><p><strong>ul. Włościańska 52,</strong><br> 01-710 Warszawa</p>'
			}, this);
		});
	});


	var scrollUpper = function(){

		$('#intro-scroll').animate({'bottom':'30px'},1000,function(){
			scrollDown();
		});
	};

	var scrollDown = function(){

		$('#intro-scroll').animate({'bottom':'15px'},1000,function(){
			scrollUpper();
		});
	};
	scrollUpper();
/*	$('#mainnav > li > a').click(function(e){
		e.preventDefault();
		var scroll = $($(this).attr('href')).position().top;

	});*/
	/*
	$('.carousel-wrap .show-description').on('click',function(e){
		var height = $('.carousel-wrap ul>li').height();
		var width= $('.carousel-wrap ul>li').width();
		var description = $(this).parent().find('.description');
		description.css('height',height-42+'px');
		description.css('width',width-10+'px');
		$(this).fadeOut();
		description.fadeIn();


	});
	*/
	$('.carousel-wrap .description .close-description').on('click',function(e){
		$(this).parent().fadeOut();
		$(this).parent().parent().parent().find('.show-description').fadeIn();
	});


	$('#country > a').click(function(){
		window.location.href = $(this).attr('href');

	});

	var ce = ($(window).width()-$('#intro-scroll').width())/2;
	$('#intro-scroll').css('left',ce+'px');

        $('.faq-box-top').click(function(){
            if($(this).parent().find('.faq-box-bottom').css('display')=='block'){
                $('.faq-box-bottom').slideUp('slow');
            }else{
		$('.faq-box-bottom').slideUp('slow');
		$(this).parent().find('.faq-box-bottom').slideDown('slow');
            }
	});

        $('.news-header').click(function(){
		$(this).parents('.news-box').find('.news-text').slideToggle('slow');

	});

	var center = $(window).width()/2;
	$('#tetris-subpage-1').css('left',(center+460)+'px');
	$('#tetris-subpage-2').css('left',(center+500)+'px');
	$('#tetris-subpage-3').css('left',(center-540)+'px');
	$('#tetris-subpage-4').css('left',(center-640)+'px');


	$('.music-control').on('click',function(){
		var music = $('#background-audio')[0];
		var d = new Date();
		d.setTime(d.getTime() + (1*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		if(music.paused){
			$(this).removeClass('muted');
			music.play();
			document.cookie="music=play; expires="+expires+"; path=/";
		}else{
			$(this).addClass('muted');
			music.pause();
			document.cookie="music=notplay; expires="+expires+"; path=/";
		}
	});

	function mobileSoundOff() {
		var music = $('#background-audio')[0];
		var d = new Date();
		d.setTime(d.getTime() + (1*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		if ($(window).width() < 768) {
			$('.music-control').addClass('muted').css({'display': 'none'});
			music.pause();
			document.cookie="music=notplay; expires="+expires+"; path=/";
		} else {
			$('.music-control').removeClass('muted').css({'display': 'block'});
			music.play();
			document.cookie="music=play; expires="+expires+"; path=/";
		}
	}

	mobileSoundOff();

	$(window).resize(function(){
		mobileSoundOff();
	});
});


$( window ).load(function() {
	$('#intro').css('position','relative');

	if($(window).width()<500){
		$('.flex-next').trigger('click');
	}

	// if($(window).width()>1024 && $(document).find('.nav-supage').length==0){
	// 		if ($(window).scrollTop() <= $('#intro').height()){
	// 				if($(document).find('video').length==0){
	// 					$('section#intro .video-background').videoBG({
	// 					position:"absolute",
	// 					zIndex:-1,
	// 					autoplay:1,
	// 					mp4:'wp-content/themes/gasshow/video/pixelheaven_n.mp4',
	// 					ogv:'wp-content/themes/gasshow/video/pixelheaven_n.ogv',
	// 					webm:'wp-content/themes/gasshow/video/pixelheaven_n.webm',
	// 					opacity:1,
	// 					scale:true,
	// 					});
	// 				}
	// 		}
    //         $(window).scroll(function () {
	// 			if ($(window).scrollTop() <= $('#intro').height()){
	// 				if($(document).find('video').length==0){
	// 					$('section#intro .video-background').videoBG({
	// 					position:"absolute",
	// 					zIndex:-1,
	// 					autoplay:0,
	// 					mp4:'wp-content/themes/gasshow/video/pixelheaven_n.mp4',
	// 					ogv:'wp-content/themes/gasshow/video/pixelheaven_n.ogv',
	// 					webm:'wp-content/themes/gasshow/video/pixelheaven_n.webm',
	// 					opacity:1,
	// 					scale:true,
	// 					});
	// 				}else{
	// 				$('.videoBG video').get(0).play();
	// 				}
	// 			}else{
	// 				$('.videoBG video').get(0).pause();
	// 			}
    //  });
	// }else{
	// 	$('section#intro').css('background','url("wp-content/themes/gasshow/images/backgrounds/PH-back.jpg") center no-repeat');
	// }
});
if($(document).find('.nav-supage').length>0){
		if ($(window).scrollTop() > $('.supage-header').outerHeight()){
			$('.nav-supage').addClass('header-lower');
			$('#menu-header-button').addClass('lower');
		}
	}else{
		if ($(window).scrollTop() > $('#intro').outerHeight()){
			$('.top-bar').addClass('header-lower');
			$('#menu-header-button').addClass('lower');
		}
	}
$(window).scroll(function () {
	if($(document).find('.nav-supage').length>0){
		if ($(window).scrollTop() > $('.supage-header').outerHeight()-50){
			$('.nav-supage').addClass('header-lower');
			$('#menu-header-button').addClass('lower');
		}else{
			$('.nav-supage').removeClass('header-lower');
			$('#menu-header-button').removeClass('lower');
		}
	}else{
		if ($(window).scrollTop() > $('#intro').outerHeight()-50){
			$('.top-bar').addClass('header-lower');
			$('#menu-header-button').addClass('lower');
		}else{
			$('.top-bar').removeClass('header-lower');
			$('#menu-header-button').removeClass('lower');
		}
	}

	var scroll = $(document).scrollTop();

		var center = $(window).width()/2;
		var introheight = $('#intro').outerHeight();
		var pixelheight = $('#pixelheaven').outerHeight();
		scroll = scroll-introheight+pixelheight;
		if(scroll>0){
			$('#tetris-subpage-1').css('top',(-100+((scroll)*0.5))+'px');
			$('#tetris-subpage-1').css('left',(center+250+((scroll)*0.6))+'px');

			$('#tetris-subpage-2').css('top',(100+((scroll)*0.5))+'px');
			$('#tetris-subpage-2').css('left',(center+250+((scroll)*0.6))+'px');

			$('#tetris-subpage-3').css('top',(-50+((scroll)*0.5))+'px');
			$('#tetris-subpage-3').css('left',(center-250-((scroll)*0.6))+'px');
		}
});

$('.changeCurrency').on('change',function(e){
	$('#iFrameResizer0').attr('src','https://pixelheaven2016.evenea.pl?out=1&lang=pl&currency='+$('.changeCurrency').val()+'&source=event_iframe');
});

$(function(){
	$(".hidden").removeClass("hidden");
});

$(function() {
	$(".thumb a").mouseover(function(){
		var href = $(this).attr("href");

		$(this).parents('.image_gallery_class').find(".big_image > img").attr({ src: href});
		return false;
	});

	$(".thumb a").mouseout(function(){
		var src = $(this).parents('.image_gallery_class').find(".big_image > img").data("basesrc");
		$(this).parents('.image_gallery_class').find(".big_image > img").attr({ src: src});
		return false;
	});

        $(".thumb a").click(function(e){
            e.preventDefault();
        });


});