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

    // Header Nav Animation
    const navElement = document.getElementById('headerNav');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const xIcon = document.getElementById('xIcon');

    hamburgerMenu.addEventListener('click', () => {
        TweenMax.to(navElement, 1, {
            x: -400
        });
    });

    xIcon.addEventListener('click', () => {
        TweenMax.to(navElement, 1.5, {
            x: 400
        });
    });


}());