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

    class Portfolio {
        constructor(title, images, description, skills) {
            this.title = title;
            this.images = images;
            this.description = description;
            this.skills = skills;
        }
    }

    portfolio.push(new Portfolio(
        'MAD XSCAPE ROOM',
        ['./img/rps.png', './img/memorycard.png'],
        'MAD Xcsape Room project for Durham College. I was responsible for creating dynamic leaderborad page.',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Photoshop']
    ));

    portfolio.push(new Portfolio(
        'JS GAMING',
        ['./img/rps.png', './img/memorycard.png'],
        'Rock Paper Scissors and Memory Card Game.',
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
        'Data visualization project to display Lakeridge projects.',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'D3']
    ));

    // portfolio.push(new Portfolio(
    //     'CYBER CHAT APPLICATION (Coming soon!)',
    //     [],
    //     'Cybar chat application using Node.js',
    //     ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']
    // ));
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
        console.log(eventTarget);
        if(eventTarget.nodeName === 'LI') {
            let elementTitle = e.target.innerText; 
            let target = portfolio.filter(item => item.title === elementTitle);
            let borderWidth = elementTitle.length * 11;
            let border = e.target.nextElementSibling;
            console.log(target);
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
                portfolioHTML += `<div><img src="${image}" alt="${title}"></div>`;
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
        if(eventTarget.nodeName === 'LI') {
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