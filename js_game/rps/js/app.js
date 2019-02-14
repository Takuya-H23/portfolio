(function() {
    'use strict';

    const user = {
        win: 0,
        lose: 0,
        even: 0,
        rock: 0,
        paper: 0,
        scissors: 0
    };

    const cpu = {
        win: 0,
        lose: 0,
        rock: 0,
        paper: 0,
        scissors: 0
    };

    const $userRockImg = $('#userRockImg');
    const $userPaperImg = $('#userPaperImg');
    const $userScissorsImg = $('#userScissorsImg');
    const $cpuRockImg = $('#cpuRockImg');
    const $cpuPaperImg = $('#cpuPaperImg');
    const $cpuScissorsImg = $('#cpuScissorsImg');
    const $userStats = $('.userStats');
    const $cpuStats = $('.cpuStats');
    const $reset = $('#reset');
    const welcome = 'Welcome to Rock Paper Scissors';

    // const cpu = Object.create(user);
    
    const generateCpuHand = () => {
        let num = Math.floor(Math.random() * 3);
        return num;
    };

    const gameHandler = e => {
        $('#userHandWrapper').off().css({
            opacity: .5
        });
        let cpuHand = generateCpuHand();
        $('#gameResult i').removeClass('hand-active');
        $('#gameResult i').css({
            opacity: 0
        });
        $('#animationContainer').html('<object width="250" height="250" data="./img/count_down.svg"></object>');

        setTimeout(() => {
            if (e.target.innerHTML === 'Rock') {
                changingOpacity($userRockImg);
                user.rock++;
                $('#userRock').text(user.rock);

                if (cpuHand === 0) {
                    cpuRock();
                    evenFunc();

                } else if (cpuHand === 1) {
                    cpuPaper();
                    loseFunc();

                } else if (cpuHand === 2) {
                    cpuScissors();
                    winFunc();
                }

            } else if (e.target.innerHTML === 'Paper') {
                user.paper++;
                changingOpacity($userPaperImg);
                $('#userPaper').text(user.paper);

                if (cpuHand === 0) {
                    cpuRock();
                    winFunc();

                } else if (cpuHand === 1) {
                    cpuPaper();
                    evenFunc();

                } else if (cpuHand === 2) {
                    cpuScissors();
                    loseFunc();
                }
            } else if (e.target.innerHTML === 'Scissors') {
                user.scissors++;
                changingOpacity($userScissorsImg);
                $('#userScissors').text(user.scissors);

                if (cpuHand === 0) {
                    cpuRock();
                    loseFunc();

                } else if (cpuHand === 1) {
                    cpuPaper();
                    winFunc();

                } else if (cpuHand === 2) {
                    cpuScissors();
                    evenFunc();
                }
            }
            $('#userHandWrapper').css({
                opacity: 1
            });
            $('#userHandWrapper').on('click', 'button', function (e) {
                gameHandler(e);
            });
        }, 3500);
    };

    const changingOpacity = el => {
        TweenMax.to(el, .5, {
            opacity: 1
        });
    };

    const cpuRock = () => {
        cpu.rock++;
        changingOpacity($cpuRockImg);
        $('#cpuRock').text(cpu.rock);
    };

    const cpuPaper = () => {
        cpu.paper++;
        changingOpacity($cpuPaperImg);
        $('#cpuPaper').text(cpu.paper);
    };

    const cpuScissors = () => {
        cpu.scissors++;
        changingOpacity($cpuScissorsImg);
        $('#cpuScissors').text(cpu.scissors);
    };

    const winFunc = () => {
        user.win++;
        cpu.lose++;
        $('.user').addClass('hand-active');
        $('#userWin').text(user.win);
        $('#cpuLose').text(cpu.lose);
    };

    const loseFunc = ()=> {
        user.lose++;
        cpu.win++;
        $('.cpu').addClass('hand-active');
        $('#userLose').text(user.lose);
        $('#cpuWin').text(cpu.win);
    };

    const evenFunc = () => {
        user.even++;
        $('.even').text(user.even);
    };

    const resetStats = (obj, el) => {
        for (let prop in obj) {
            obj[prop] = 0;
        }

        $(el).text(0);
    };

    //Get username-----------------------------------------------------------
    // let name = prompt('Hello, what is your name? (Up to 9 letters)');
    // let userName = document.getElementById('username');
    // if (name == 'null' || name == ''|| name.length > 10) {
    //     userName.textContent = 'You';
    // } else {
    //     userName.textContent = name;
    // }

    $('#userHandWrapper').on('click', 'button', function(e) {
        gameHandler(e);
        
    });

    $reset.on('click', () => {
        $('#gameResult i').css({opacity: 0});
        $('#gameResult i').removeClass('hand-active');
        $('#animationContainer').html(`<h2 id="welcomeMsg">${welcome}</h2>`);
        resetStats(user, $userStats);
        resetStats(cpu, $cpuStats);
    });

    // plugin---------------------------------------------------------------------------
    // typing effect
    let typed = new Typed("#typed", {
        strings: ["Rock Paper Scissor Game"],
        smartBackspace: true,
        typeSpeed: 50 //
    });

    $(window).ready(function () {
        TweenMax.to('aside, section, footer', 1, {
            delay: 2.3,
            opacity: 1,
            ease: Power2.easeInOut
        });
    });
})();