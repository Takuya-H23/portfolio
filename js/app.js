/**
*@file app.js
*
*@author Takuya Hirata - 100688080
*date 2018-05-08
*@version 1.0
*
*@purpose Portfolio
*
*@description 
*/

(function() {
    'use strict';

    const ST1 = document.getElementById('st1');
    const ST1_LENGTH = ST1.getTotalLength();
    const ST2 = document.getElementById('st2');
    const ST2_LENGTH = ST2.getTotalLength();

    function setOffset(el, elLength) {
        TweenMax.set(el, {
            strokeDashoffset: elLength,
            strokeDasharray: elLength
        });
    }

    // Draw lines.
    function draw(el, delay = 0) {
        TweenMax.to(el, 2.5, {
            delay: delay,
            strokeDashoffset: 0,
        });
    }

    setOffset(ST1, ST1_LENGTH);
    draw(ST1);
    setOffset(ST2, ST2_LENGTH);
    draw(ST2);

}());