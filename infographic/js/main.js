/* eslint-disable */
/* global $, TweenMax, window, Power2 */

// hides all screens except for screen 1
$('section:gt(0)').hide();
// set initial screen number
var screenNum = 1;
// transition duration
var duration = 1;
// delay for starting screen animations
// initially set to 2s to allow the preloader to show and then update in loadScreen1
var delay = 0;

// hide/show navigation functions

function hideNav() {
	TweenMax.to('.next', 0.25, {
		right: -100,
		ease: Power2.easeOut
	});

	TweenMax.to('.prev', 0.25, {
		left: -100,
		ease: Power2.easeOut
	});
}

function showNav() {
	TweenMax.to('.next', 0.25, {
		right: 0,
		ease: Power2.easeOut
	});

	TweenMax.to('.prev', 0.25, {
		left: 0,
		ease: Power2.easeOut
	});
}

// next and previous navigation functions
function showNextScreen() {
	// targets the current screen
	var currentScreen = 'section:nth-child(' + screenNum + ')';
	// sets next screen number
	screenNum++;
	// targets the next screen
	var nextScreen = 'section:nth-child(' + screenNum + ')';
	// fades out navigation
	hideNav();
	// transitions current screen out
	TweenMax.fromTo(currentScreen, duration, {
		x: 0
	}, {
		delay: 0.5,
		x: -960,
		ease: Power2.easeInOut
	});
	// shows next screen
	$(nextScreen).show();
	// transitions next screen in
	TweenMax.fromTo(nextScreen, duration, {
		x: 960
	}, {
		delay: 0.5,
		x: 0,
		ease: Power2.easeInOut,
		onComplete: function () {
			// hide current screen
			$(currentScreen).hide();
			// fade on navigation
			showNav();
		}
	});
	// load function to animate on contents of screen
	window['loadScreen' + screenNum]();

}


function showPrevScreen() {
	// targets the current screen
	var currentScreen = 'section:nth-child(' + screenNum + ')';
	// sets next screen number
	screenNum--;
	// targets the next screen
	var prevScreen = 'section:nth-child(' + screenNum + ')';
	// fades out navigation
	hideNav();
	// transitions current screen out
	TweenMax.fromTo(currentScreen, duration, {
		x: 0
	}, {
		delay: 0.5,
		x: 960,
		ease: Power2.easeInOut
	});
	// shows previous screen
	$(prevScreen).show();
	// transitions next screen in
	TweenMax.fromTo(prevScreen, duration, {
		x: -960
	}, {
		delay: 0.5,
		x: 0,
		ease: Power2.easeInOut,
		onComplete: function () {
			// hide current screen
			$(currentScreen).hide();
			// fade on navigation
			showNav();
		}
	});
	// load function to animate on contents of screen
	window['loadScreen' + screenNum]();
}

function goDefault(el, src) {
	$(el).attr('src', src);
};

// next and previous button clicks
$('.next').click(showNextScreen);
$('.prev').click(showPrevScreen);

//LOAD SCREEN AUDIO ///////////////////////////////////////////
function loadScreenAudio() {
    
	$('#voiceover').attr('src', 'audio/screen' + screenNum + '.mp3');
	$('#voiceover').trigger('play');
    
}

// fade on screen 1 on page load and then hide loading gif
TweenMax.from('#screen1', 1, {
	delay: duration,
	opacity: 0,
	onComplete: function () {
		$('#loading').hide();
	}
});

TweenMax.from('main', 2, {
	delay: duration + 1,
	y: -1000,
	ease: Bounce.easeOut,
});

//start background music after short delay
TweenMax.delayedCall(delay + 1, function() {
	// set volume of BG music to zero
	$('#background').prop('volume', 0);
	// play BG music
	$('#background').trigger('play');
	// fade in BG music to 50% volume
	$('#background').animate({volume: 0.05}, 2000);
});

// CONTROL BACKGROUND AUDIO ////////////////////////////////////
$('#playPause').click(function() {
    
	if ($(this).hasClass('pause')) {
        
		$('#background').trigger('pause');
		$(this).removeClass('pause').addClass('play');
        
	} else {
        
		$('#background').trigger('play');
		$(this).removeClass('play').addClass('pause');
        
	}
    
});

// functions for loading on content of each screen
// LOAD SCREEN 1 ///////////////////////////////////////////////
function loadScreen1() {

	TweenMax.from('#screen1 h1', 1, {
		delay: delay,
		opacity: 0
	});

	// update delay to wait for screen transition
	delay = duration + 0.5;

	TweenMax.from('#screen1 p', 0.5, {
		delay: delay + 3,
		opacity: 0
	});

	$('#screen1 .happyBtn').click(function() {
		TweenMax.fromTo('#screen1 .happyBtn', 0.5, {
			opacity: 1
		}, {
			opacity: 0
		});

		TweenMax.fromTo('#screen1 .layer2', 2.5, {
			x: 0
		}, {
			delay: 0.5,
			x: 273
		});
	});

	TweenMax.delayedCall(delay + 2.7, function() {
		$('#typingSound').trigger('play');
	});

	TweenMax.delayedCall(delay + 5, loadScreenAudio);

}

// animate on content of screen 1 on page load
loadScreen1();

// LOAD SCREEN 2 ///////////////////////////////////////////////
function loadScreen2() {

	// animate content on with delays
	TweenMax.from('#screen2 h1', 0.5, {
		delay: delay,
		opacity: 0
	});

	TweenMax.from('#screen2 .animatedDiv1', 1.5, {
		delay: delay + 0.5,
		opacity: 0,
		x: 310,
		ease: Power4.easeInOut
	});

	TweenMax.from('#screen2 .animatedDiv2', 1.5, {
		delay: delay + 1,
		opacity: 0,
		x: -310,
		ease: Power4.easeInOut
	});

	TweenMax.from('#screen2 .html', 1, {
		delay: delay + 1.5,
		opacity: 0,
		ease: Power4.easeInOut
	});

	TweenMax.from('#screen2 .js', 1, {
		delay: delay + 2,
		opacity: 0,
		ease: Power4.easeInOut
	});

	var button = document.getElementById('button');
	button.addEventListener('click', function () {
		var username = prompt('What is your name?');
		if (username == null) {
			username = '';
		} else {
			document.getElementById('username').innerHTML = username;
		}
		document.getElementById('msg').innerHTML = 'You clicked me!';
	});

	// start audio
	TweenMax.delayedCall(delay + 2, loadScreenAudio);

}

// LOAD SCREEN 3 ///////////////////////////////////////////////
function loadScreen3() {

	$('.back-default').on('click', function() {
		goDefault('#imageHolder', './img/skills.svg');
	});

	// animate content on with delays
	TweenMax.from('#screen3 h1', 1, {
		delay: delay,
		opacity: 0
	});


	$('#screen3 h2').each(function (i) {
		TweenMax.from($(this), 1, {
			delay: delay + (i / 2),
			y: -40,
			opacity: 0,
			ease: Power4.easeInOut
		});
	});

	$('#screen3Msg').delay(4500).fadeIn('slow');

	$('#screen3').on('click', 'h2, img', function () {

		var skillName = $(this).attr('class');
		var skillPath = 'img/' + skillName + '.svg';

		TweenMax.fromTo('#skillLayer', 1, {
			opacity: 1
		}, {
			opacity: 0
		});
		if (skillName === 'pcImg') {
			$(this).attr('src', './img/skills.svg');
		} else {
			$('.pcImg').attr('src', skillPath);
		}

		TweenMax.delayedCall(0.1, function() {
			$('#clickSound').trigger('play');
		});
	});

	TweenMax.delayedCall(delay + 1, loadScreenAudio);
}

// LOAD SCREEN 4 ///////////////////////////////////////////////
function loadScreen4() {
	$('.back-default2').on('click', function () {
		goDefault('#imageHolder2', './img/pc.svg');
	});

	// animate content on with delays
	TweenMax.from('#screen4 h1', 1, {
		delay: delay,
		opacity: 0
	});

	TweenMax.from('#screen4 .browser', 1, {
		delay: delay,
		scale: 0,
		ease: Back.easeInOut
	});

	TweenMax.from('#screen4 .brackets', 1, {
		delay: delay + 0.5,
		scale: 0,
		ease: Back.easeInOut
	});

	TweenMax.from('#screen4 .terminal', 1, {
		delay: delay + 1.5,
		opacity: 0,
		y: -100,
		ease: Power4.easeOut
	});

	TweenMax.from('#screen4 .photoshop', 1, {
		delay: delay + 2,
		opacity: 0,
		y: -50,
		ease: Power4.easeOut
	});

	TweenMax.from('#screen4 .illustrator', 1, {
		delay: delay + 2.5,
		opacity: 0,
		y: -25,
		ease: Power4.easeOut
	});

	TweenMax.from('#screen4 #screen4Msg', 1, {
		delay: delay + 3,
		opacity: 0,
		y: -25,
		ease: Power4.easeOut
	});

	$('#screen4').on('click', 'img', function () {
		var cName = $(this).attr('class');
		var path = 'img/' + cName + '2.svg';

		TweenMax.fromTo('#toolLayer', 1, {
			opacity: 1
		}, {
			opacity: 0
		});

		if (cName === 'pc') {
			$(this).attr('src', 'img/pc.svg');
		} else {
			$('.pc').attr('src', path);
		}

		TweenMax.delayedCall(0.1, function() {
			$('#clickSound').trigger('play');
		});
	});

	TweenMax.delayedCall(delay + 1, loadScreenAudio);

}

// LOAD SCREEN 5 ///////////////////////////////////////////////
function loadScreen5() {

	TweenMax.to('#screen5 .head', 0.1, {
		y: -270
	});

	// animate content on with delays
	TweenMax.from('#screen5 h1', 1, {
		delay: delay,
		opacity: 0
	});

	$('.salary p').each(function (i) {
		TweenMax.from($(this), 1, {
			delay: delay + (i / 2),
			opacity: 0,
			x: -30,
			ease: Power4.easeOut
		});
	});

	TweenMax.from('#screen5 .dev', 1.5, {
		delay: delay + 1,
		x: -340,
		ease: Bounce.easeOut
	});

	TweenMax.fromTo('#screen5 .male', 2, {
		opacity: 0,
		width: 0
	}, {
		delay: delay + 2,
		opacity: 1,
		width: 320,
		ease: Power4.easeOut
	});

	TweenMax.fromTo('#screen5 .female', 1.5, {
		opacity: 0,
		width: 0
	}, {
		delay: delay + 3,
		opacity: 1,
		width: 80,
		ease: Power4.easeOut
	});

	$('#screen5 .help').animate({
		opacity: 1
	});

	$('#screen5 .msg').animate({
		opacity: 0
	});

	$('#screen5 .help').click(function() {

		TweenMax.fromTo($(this), 0.3, {
			opacity: 1
		}, {
			opacity: 0
		});

		TweenMax.to('#screen5 .head', 2, {
			y: 270
		});

		TweenMax.fromTo('#screen5 .msg', 0.5,{
			opacity: 0
		}, {
			delay: 2,
			opacity: 1
		});
	});

	TweenMax.delayedCall(delay + 2, loadScreenAudio);


}

function loadScreen6() {
	TweenMax.from('#screen6 h1', 1, {
		delay: delay,
		opacity: 0
	});

	TweenMax.from('#screen6 .dcLogo', 1, {
		delay: delay + 0.5,
		x: 200,
		opacity: 0
	});

	$('#screen6 h3').hover(function() {
		TweenMax.to($(this), 0.5, {
			fontSize: 35,
			ease: Power4.easeOut
		});
	}, function() {
		TweenMax.to($(this), 0.5, {
			fontSize: 24,
			ease: Power4.easeOut
		});
	});

	$('#screen6 .dcLogo').hover(function() {
		TweenMax.to('#screen6 .go', 0.3, {
			opacity: 1
		});
	}, function() {
		TweenMax.to('#screen6 .go', .5, {
			opacity: 0
		});
	});

	TweenMax.delayedCall(delay + 1, loadScreenAudio);

}


