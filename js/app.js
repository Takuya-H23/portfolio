/**
*@file app.js
*
*@author Takuya Hirata - 100688080
*date 2019-01-08
*@version 1.0
*
*@description Portfolio site
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

    class Portfolio {
        constructor(title, images, description, skills) {
            this.title = title;
            this.images = images;
            this.description = description;
            this.skills = skills;
        }
    }

    portfolio.push(new Portfolio(
        'MY EDUCATION',
        ['./img/my_education.png', './img/my_education2.png'],
        'A Single Page Application (SPA) with Treehouse API',
        ['HTML', 'CSS', 'JavaScript', 'React']
    ));

    portfolio.push(new Portfolio(
        'REAL TIME CHAT APPLICATION',
        ['./img/chat2.png', './img/chat1.png'],
        'Real time chat application using Node.js and Express.',
        ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']
    ));

    portfolio.push(new Portfolio(
        'FLASHCARDS WITH EXPRESS',
        ['./img/flashcard1.png', './img/flashcard2.png'],
        'Create HTML template based on get requests, then serve flashcards using Node.js, Express and Pug',
        ['JavaScript', 'Node.js', 'Express', 'Pug']
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
        'YOKOHAMA SNOWBOARDING',
        ['./img/yokohama1.png', './img/yokohama2.png'],
        'Branding a snowboarding brand. Design and front-end web development.',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Illustrator', 'Photoshop']
    ));

    portfolio.push(new Portfolio(
        'EASY GROCERIES',
        ['./img/grocery.png', './img/grocery2.png'],
        'Responsible front end development. Dynamic grocery site.',
        ['HTML', 'CSS', 'JavaScript', 'jQuery']
    ));

    portfolio.push(new Portfolio(
        'BOOKWORM',
        ['./img/bookworm.png', './img/bookworm2.png'],
        'User authentication with Node.js and MongoDB',
        ['Node.js', 'Express', 'MongoDB', 'Pug']
    ));

    portfolio.push(new Portfolio(
        'RSVP',
        ['./img/rsvp1.png', './img/rsvp2.png'],
        'RSVP Application using React',
        ['JavaScript', 'React.js']
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
     * Scroll Animation
     */
    $(window).scroll(() => {
        if (!scroll) {
            $('#stickyHeader').css('display', 'flex');
            scroll = true;
        }
    });

    let navOffset = $('#stickyHeader').innerHeight() - 30;

    $("nav a[href^='#']").click(function () {
        let offset = $($(this).attr('href')).offset().top - navOffset;
        $("body, html").animate({
            scrollTop: offset
        }, 1000);
    });

    /**
     * Hover Animation on titles in mobile
     */
    $('.skills-mobile').on('mouseover', (e) => {
        let el = e.target.parentElement;
        // let title = el.previousElementSibling.lastElementChild;
        // console.log(title);

        if(el.className === 'layer') {
            TweenMax.to(el, .5, {
                opacity: 1
            });
        }

        // TweenMax.to(title, .5, {
        //     delay: .2,
        //     opacity: 1
        // });
    });

    $('.skills-mobile').on('mouseout', (e) => {
        let el = e.target.parentElement;
        if (el.className === 'layer') {
            TweenMax.to(el, .5, {
                opacity: 0
            });
        }
    });

    /**
     * Hover Animation for Portfolio 
     */
    titleList.addEventListener('mouseover', (e) => {
        let eventTarget = e.target;
        if(eventTarget.nodeName === 'A' && eventTarget.className === 'link-medium') {
            let elementTitle = eventTarget.innerText;
            let target = portfolio.filter(item => item.title === elementTitle);
            let borderWidth = eventTarget.offsetWidth;
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
        if (eventTarget.nodeName === 'A' && eventTarget.className === 'link-medium') {
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