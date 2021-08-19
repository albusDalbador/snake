// import Element from './element';
// import Head from './headelement';


initBoard();

initSnake();


function initSnake(){

    // const snake = document.createElement('div');
    // snake.id = 'snake';

    for (let i = 1; i <= 2; i++) {

        $(`.board_field:nth-child(${i})`).append('<div class="snake_elem "></div>')
    }

    $(`.board_field:nth-child(${3})`).append('<div class="snake_elem head"></div>')
     
}

function initBoard() {
    for (let i = 0 ; i < 448; i++) {
        // const elemt = document.createElement('')
        $('#board').append('<div class="board_field"></div>');
    }
}

