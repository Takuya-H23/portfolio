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

    // Form Section
    const submitBtn = document.getElementById('submitBtn');

    /**
     *  Hamburger Menu Animation
     */
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

    /**
     * Hover Animation on Button
     */
    submitBtn.addEventListener('mouseover', e => {
        TweenMax.to(e.target, 1, {
            backgroundColor: '#f9f9f9',
            color: '#908f8f'
        });
    });

    submitBtn.addEventListener('mouseout', e => {
        TweenMax.to(e.target, 1, {
            backgroundColor: '#908f8f',
            color: '#fff'
        });        
    });

    /**
     * Hover Animation for Portfolio Description
     */
    $('.overlay').on('mouseover', e => {
        TweenMax.to(e.target, .5, {
            opacity: 1
        });
    });

    $('.overlay').on('mouseout', e => {
        TweenMax.to(e.target, .5, {
            opacity: 0
        });
    });

    /**
     * Ajax for Sending Email
     */

    $('#submitBtn').on('click', function(e) {

        e.preventDefault();

        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();

        let emailRequest = $.ajax({
            type: 'POST',
            url: 'services/mail.php',
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
        });

        emailRequest.done(function() {
            alert('successful');
        });
    
        emailRequest.fail(function (jqXHR, textStatus) {
            alert("Something went Wrong!" + textStatus + '/' + jqXHR.status);
        });
    }); 

}());