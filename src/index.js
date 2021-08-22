import * as game from './scripts/staticgraphics'
import {addApple} from './scripts/apple'


import moveSnake from './scripts/gameplay'
import * as forward from './scripts/direction'



$(document).ready(() => {

    game.initBoard();

    game.initSnake();

    const fields = Array.from(document.querySelectorAll('.board_field'));

    let snakeElems = Array.from(document.querySelectorAll('.snake_elem')).reverse();


    $('#start_button').click(() => {

        snakeElems.forEach(item => {
            item.parentNode.classList.add('right');
        });

        setInterval(() => {
            snakeElems  = moveSnake(snakeElems,fields);
        }, 200);
        
        addApple(1);

        $('#start_button').prop('disabled', true);
    })

    $(window).keypress( e => {

        switch (e.which) { 
            case 119:
                forward.addUpDirection();
            break;
            case 100:
                forward.addRightDirection();
            break;
            case 115:
                forward.addDownDirection();
            break;
            case 97:
                forward.addLeftDirection();
            break;
            
        }

    })
})