/**
*@file main.js
*
*@author Takuya Hirata - 100688080
*date 2018-11-30
*@version 1.0
*
*@purpose Animate elements created in Illustrator. Improve UI and UX.
*
*@description Splash page of rock paper scissors and memory card game.
*/

window.onload = function() {
    'use strict';

    const BG = document.getElementById('bg');
    // const LINE1 = document.getElementById('line1');
    // const LINE2 = document.getElementById('line2');
    // const FIRST_LINE_LENGTH = LINE1.getTotalLength();

    const TEXT1 = document.getElementById('text1');
    const TEXT2 = document.getElementById('text2');
    const TEXT3 = document.getElementById('text3');
    const LINE3 = document.getElementById('line3');
    const LINE4 = document.getElementById('line4');
    const LINE5 = document.getElementById('line5');
    const LINE6 = document.getElementById('line6');
    const LINE7 = document.getElementById('line7');
    const LINE8 = document.getElementById('line8');
    const LAST_LINE_LENGTH = LINE8.getTotalLength();
    const SECOND_LINE_LENGTH = LINE3.getTotalLength();

    const ARROW1 = document.getElementById('arrow1');
    const ARROW2 = document.getElementById('arrow2');
    const ARROW_LENGTH = ARROW1.getTotalLength();

    const FIREWORKS = document.getElementsByClassName('st6');
    const OP = [0.9, 0.8, 0.6, 0.5, 0.4, 0.3];
    const COLORS = ['red', 'yellow', 'blue'];

    // Set strokeDashoffset and strokeDasharray to draw.
    function setOffset(el, elLength) {
        TweenMax.set(el, {
            strokeDashoffset: elLength,
            strokeDasharray: elLength
        });
    }

    // Draw lines.
    function draw(el, delay = 0) {
        TweenMax.to(el, 1, {
            delay: delay,
            strokeDashoffset: 0
        });
    }

    // Change y property's value
    function lineUp(el, delay = 0) {
        TweenMax.to(el, 1, {
            delay: delay,
            y: -47
        });
    }

    // Change y property's value
    function lineDown(el, delay = 0) {
        TweenMax.to(el, 1, {
            delay: delay,
            y: 47
        });
    }

    // Change opacity of text elements
    function opacity(el, delay) {
        TweenMax.to(el, 1, {
            delay: delay,
            opacity: 1
        });
    }

    // Flash animation for background-color.
    const BG_ANIMATION = new TimelineMax;
    BG_ANIMATION.to(BG, .2, {
        fill: 'purple'
    })
        .to(BG, .1, {
            fill: 'black'
        })
        .to(BG, .1, {
            fill: 'blue'
        })
        .to(BG, .1, {
            fill: 'brown'
        })
        .to(BG, .1, {
            fill: '#050528'
        });

    function changeStroke(el) {
        TweenMax.to(el, 2, {
            stroke: 'yellow'
        });
    }

    function changeToDefault(el) {
        TweenMax.to(el, 2, {
            stroke: '#fff'
        });
    }

    // For firework animation. Changing its opacity.
    function fire() {
        let num1 = Math.floor(Math.random() * FIREWORKS.length);
        let num2 = Math.floor(Math.random() * FIREWORKS.length);
        let num3= Math.floor(Math.random() * FIREWORKS.length);

        const FIRE_ANIMATION = new TimelineMax;
        const FIRE_ANIMATION2 = new TimelineMax;
        const FIRE_ANIMATION3 = new TimelineMax;

        TweenMax.set(FIREWORKS[num1], {
            transformOrigin: 'center center'
        });

        TweenMax.set(FIREWORKS[num2], {
            transformOrigin: 'center center'
        });

        TweenMax.set(FIREWORKS[num3], {
            transformOrigin: 'center center'
        });

        FIRE_ANIMATION.to(FIREWORKS[num1], .1, {
            opacity: 0,
            scaleX: 0,
            scaleY: 0
        })
        .to(FIREWORKS[num1], 1, {
            opacity: OP[num1],
            scaleX: 1.5,
            scaleY: 1.5
        })
        .to(FIREWORKS[num1], .5, {
            opacity: 0
        });

        FIRE_ANIMATION2.to(FIREWORKS[num2], .1, {
            delay: .5,
            opacity: 0,
            scaleX: 0,
            scaleY: 0
        })
        .to(FIREWORKS[num2], 1.5, {
            opacity: OP[num2],
            scaleX: 1.8,
            scaleY: 1.8
        })
        .to(FIREWORKS[num2], .5, {
            opacity: 0
        });

        FIRE_ANIMATION3.to(FIREWORKS[num3], .1, {
            delay: .3,
            opacity: 0,
            scaleX: 0,
            scaleY: 0
        })
        .to(FIREWORKS[num3], 1.5, {
            opacity: OP[num3],
            scaleX: 2,
            scaleY: 2
        })
        .to(FIREWORKS[num3], 1, {
            opacity: 0
        });
    }

    const GAME_TITLE = new TimelineMax({repeat: -1, yoyo: true});

    GAME_TITLE.to($('#text1'), 1.5, {
        fill: 'yellow'
    })
    .to($('#text1'), 1.5, {
    fill: 'red'
    })
    .to($('#text1'), 1.5, {
    fill: 'blue'
    })
    .to($('#text1'), 1.5, {
    fill: 'white'
    });

    // Call the functions above with necessary parameters.
    // Setting

    // setOffset(LINE1, FIRST_LINE_LENGTH);
    // setOffset(LINE2, FIRST_LINE_LENGTH);
    setOffset(LINE3, SECOND_LINE_LENGTH);
    setOffset(LINE4, SECOND_LINE_LENGTH);
    setOffset(ARROW1, ARROW_LENGTH);
    setOffset(ARROW2, ARROW_LENGTH);
    setOffset(LINE5, LAST_LINE_LENGTH);
    setOffset(LINE6, LAST_LINE_LENGTH);
    setOffset(LINE7, LAST_LINE_LENGTH);
    setOffset(LINE8, LAST_LINE_LENGTH);

    // Animation
    // draw(LINE1, .5);
    // draw(LINE2, .5);
    // lineUp(LINE1, 1.5);
    // lineDown(LINE2, 1.5);
    opacity(TEXT1, .5);
    draw(LINE3, 1.5);
    draw(LINE4, 1.5);
    draw(ARROW1, 2.5);
    draw(ARROW2, 2.5);
    draw(LINE5, 3.5);
    draw(LINE6, 3.5);
    draw(LINE7, 3.5);
    draw(LINE8, 3.5);
    lineUp(LINE5, 4.5);
    lineDown(LINE8, 4.5);
    lineUp(LINE6, 4.5);
    lineDown(LINE7, 4.5);
    opacity(TEXT2, 5.5);
    opacity(TEXT3, 5.5);
    
    // Call fire() function every 2.5 seconds after 6 seconds 
    setTimeout(function() {
        let fireAnimation = setInterval(fire, 2500);
    }, 4000);

    $('.link-animation1').on('mouseover', function () {
        TweenMax.to($('#text2'), 1.5, {
            fill: 'orange'
        }); 
        changeStroke('#line3');
        changeStroke('#arrow1');
        changeStroke('#line5');
        changeStroke('#line8');
    });

    $('.link-animation1').on('mouseout', function () {
        TweenMax.to($('#text2'), 1.5, {
            fill: '#fff'
        });
        changeToDefault('#line3');
        changeToDefault('#arrow1');
        changeToDefault('#line5');
        changeToDefault('#line8');
    });

    $('.link-animation2').on('mouseover', function () {
        TweenMax.to($('#text3'), 1.5, {
            fill: 'orange'
        });
        changeStroke('#line4');
        changeStroke('#arrow2');
        changeStroke('#line6');
        changeStroke('#line7');
    });

    $('.link-animation2').on('mouseout', function () {
        TweenMax.to($('#text3'), 1.5, {
            fill: '#fff'
        });
        changeToDefault('#line4');
        changeToDefault('#arrow2');
        changeToDefault('#line6');
        changeToDefault('#line7');
    });
};