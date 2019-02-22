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

    // Header Nav Section
    const navElement = document.getElementById('headerNav');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const xIcon = document.getElementById('xIcon');

    //Portfolio Section
    const titleList = document.getElementById('titleList');
    const portfolioWrapper = document.getElementById('portfolioWrapper');
    const portfolio = [];
    // Form Section
    const submitBtn = document.getElementById('submitBtn');
    let scroll = false;
    // const position = $(window).scrollTop();
    $(window).scroll(() => {
        if(!scroll) {
            $('#stickyHeader').css('display', 'flex'); 
            scroll = true;
        }
    });

    var navOffset = $('#stickyHeader').innerHeight() - 20;

    $("nav a[href^='#']").click(function() {
        var idPosNav = $($(this).attr('href')).offset().top - navOffset;
        $("body, html").animate({
            scrollTop: idPosNav
        }, 1000);
    });

    class Portfolio {
        constructor(title, images, description, skills) {
            this.title = title;
            this.images = images;
            this.description = description;
            this.skills = skills;
        }
    }

    portfolio.push(new Portfolio(
        'MAD XSCAPE ROOM (Developing)',
        ['./img/main_logo.jpg', './img/main_logo.jpg'],
        'MAD Xcsape Room project for Durham College. I was responsible for creating a dynamic leaderborad page.',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Photoshop']
    ));

    portfolio.push(new Portfolio(
        'REAL TIME CHAT APPLICATION',
        ['./img/chat2.png', './img/chat1.png'],
        'Real time chat application using Node.js and Express. To try the application, please download the files from my github account and run "npm install", and"node app" commands in your Terminal.',
        ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']
    ));

    portfolio.push(new Portfolio(
        'GREAT PLACE IN CANADA (Developing)',
        ['./img/great_place_canada.png', './img/great_place_canada.png'],
        'Dynamically display great places I have been by creating and serving JSON file in Node.js.',
        ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']
    ));

    portfolio.push(new Portfolio(
        'JS GAMING',
        ['./img/rps.png', './img/memorycard.png'],
        'Rock Paper Scissors and Memory Card Game with svg animation.',
        ['HTML', 'CSS', 'SASS', 'JavaScript', 'jQuery', 'Illustrator']
    ));

    portfolio.push(new Portfolio(
        'WEB DEVELOPMENT INFOGRAPHIC',
        ['./img/languages.png', './img/skills.png'],
        'Infographic project to show what front-end web developers do.',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Illustrator']
    ));

    portfolio.push(new Portfolio(
        'LAKERIDGE HEALTH',
        ['./img/lakeridge1.png', './img/lakeridge2.png'],
        'Data visualization project to display Lakeridge projects using D3.',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'D3']
    ));
    
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
     * Hover Animation for Portfolio 
     */
    titleList.addEventListener('mouseover', (e) => {
        let eventTarget = e.target;
        if(eventTarget.nodeName === 'A') {
            let elementTitle = eventTarget.innerText;
            let target = portfolio.filter(item => item.title === elementTitle);
            let borderWidth = elementTitle.length * 12.5;
            let border = eventTarget.nextElementSibling;
            let title = target[0].title;
            let portfolioHTML = '';

            TweenMax.to(border, 1, {
                width: borderWidth
            });

            TweenMax.set(portfolioWrapper, {
                opacity: 0
            });

            portfolioHTML = `<h4>${title}</h4>`;
            portfolioHTML += '<div class="thumbnail-wrapper">';
            target[0].images.forEach(image => {
                portfolioHTML += `<div><a href="${image}" target="_blank"><img src="${image}" alt="${title}"></a></div>`;
            });
            portfolioHTML += `
            </div>
            <p class="desc">${target[0].description}</p>
            <div class="skills-wrapper">
        `;
            target[0].skills.forEach(skill => {
                portfolioHTML += `<span>${skill}</span>`;
            });
            portfolioHTML += '</div>';

            portfolioWrapper.innerHTML = portfolioHTML;

            TweenMax.to(portfolioWrapper, 2, {
                opacity: 1
            });
        }
        
    });

    titleList.addEventListener('mouseout', (e) => {
        let eventTarget = e.target;
        if(eventTarget.nodeName === 'A') {
            let border = e.target.nextElementSibling;
            TweenMax.to(border, 1, {
                width: 0
            }); 
        }
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

        if(name.length > 0 && email.length > 0 && subject.length > 0 && message.length > 0) {
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

            emailRequest.done(function () {
                alert('Thank you for the message');
            });

            emailRequest.fail(function (jqXHR, textStatus) {
                alert("Something went Wrong!" + textStatus + '/' + jqXHR.status);
            });
        } else {
            alert('Please fill all the fields');
        }
    }); 

}());