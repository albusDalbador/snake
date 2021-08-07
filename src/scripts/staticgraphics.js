// import Element from './element';
// import Head from './headelement';

initSnake();

function initSnake(){

    const snake = document.createElement('div');
    snake.id = 'snake';

    for (let i = 0 ; i < 3; i++) {
        const elem = document.createElement('div');

        elem.classList.add('snake_elem');

        snake.append(elem);
    }

    $('#field').append(snake);

    $('.snake_elem:last').addClass('snake_head');
}