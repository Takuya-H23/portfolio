/**
*
*@file main.js
*
*@author Takuya Hirata - 100688080
*
*@date 2018-11-27
*
*@version 1.1
*@purpose Practicing Vue.js 
*
*@description Rebuild Rock Paper Scissor Game with Vue.js
*/

window.onload = function() {
    'use strict';

    //This instance holds everything that will be modified in #testWrapper.
    //'this' keyword always refers to things in data object and methods object
    let rpsApp = new Vue (
        {
            el: '#testWrapper',
    
            data: {
                userWin: 0,
                userLose: 0,
                even: 0,
                userRock: 0,
                userPaper: 0,
                userScissor: 0,
                // rock -> paper -> scissor -> win -> lose
                aiData: [0, 0, 0, 0, 0],

                resultMsg: ['You Win!', 'You Lost', 'Even!'],
                result: 'Welcome to Rock Paper Scissors!',
                hands: ['./img/hand1.svg', './img/hand2.svg', './img/hand3.svg'],
                userPick: './img/rps.svg',
                aiPick: './img/rps.svg',
                picks: '',
                handsMsg: ['Rock', 'Paper', 'Scissors'],
                checkMsg: 'Are you sure?'
            },

            methods: {
                // Function for when the user picks rock
                rockFunc() {
                    let ai = Math.floor(Math.random() * 3);
                    this.aiUpdate(ai);
                    this.userRock++;
                    this.userPick = this.hands[0];
                    this.picks = `${this.handsMsg[0]} VS ${this.handsMsg[ai]}`;
        
                    if(ai === 0) {
                        this.evenFunc();
                    } else if(ai === 1) {
                        this.lose();
                    } else {
                        this.win();
                    }
                },

                // Function for when the user picks paper
                paperFunc() {
                    let ai = Math.floor(Math.random() * 3);
                    this.aiUpdate(ai);
                    this.userPaper++;
                    this.userPick = this.hands[1];
                    this.picks = `${this.handsMsg[1]} VS ${this.handsMsg[ai]}`;
                    if(ai === 0) {
                        this.win();
                    } else if(ai === 1) {
                        this.evenFunc();
                    } else {
                        this.lose();
                    }
                },

                // Function for when the user picks scissors
                scissorFunc() {
                    let ai = Math.floor(Math.random() * 3);
                    this.aiUpdate(ai);
                    this.userScissor++;
                    this.userPick = this.hands[2];
                    this.picks = `${this.handsMsg[2]} VS ${this.handsMsg[ai]}`;
                    if(ai === 0) {
                        this.lose();
                    } else if(ai === 1) {
                        this.win();
                    } else {
                        this.evenFunc();
                    }
                },

                // win, lose, and evenFunc run depending on the result.
                // When the user wins, this function runs.
                win() {
                    this.userWin++;
                    this.aiData[4]++;
                    this.result = this.resultMsg[0];
                },
                // When the user loses, this function runs.
                lose() {
                    this.userLose++;
                    this.aiData[3]++;
                    this.result = this.resultMsg[1];
                },
                // When the it is even, this function runs.
                evenFunc() {
                    this.even++;
                    this.result = this.resultMsg[2];
                },
                
                // Update the picture.
                aiUpdate(h) {
                    this.aiPick = this.hands[h];
                    this.aiData[h]++;
                },
                
                // reset every stats when confirm returns true.
                resetFunc() {
                    let check = confirm(this.checkMsg);

                    if(check) {
                        for(let i = 0; i < this.aiData.length; i++) {
                            this.aiData[i] = 0;
                        }
    
                        this.userWin = 0;
                        this.userLose = 0;
                        this.even = 0;
                        this.userRock = 0;
                        this.userPaper = 0;
                        this.userScissor = 0;
                    }
                }
            }
        }
    );

};

 



