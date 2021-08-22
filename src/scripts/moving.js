import {checkIfApple} from './apple'

export function moveUp (snakePosition) {

    const nextInd = snakePosition - 28;

    $(`.board_field:nth-child(${snakePosition})`).addClass('up previous');

    if (nextInd > 0) {

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        checkIfApple(nextInd);

        return nextInd;
    }
    else {

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd + 448})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd + 448})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        checkIfApple(nextInd + 448);

        return nextInd + 448;
    }
}

export function moveRight(snakePosition) {
    const nextInd = snakePosition + 1;

    $(`.board_field:nth-child(${snakePosition})`).addClass('right previous');


    if ( (nextInd - 1) % 28 != 0) {
        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){

            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        checkIfApple(nextInd);

        return nextInd;
    }
    else {

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd - 28})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd - 28})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        checkIfApple(nextInd -28);

        return nextInd - 28;
    }
}

export function moveDown(snakePosition) {
    const nextInd = snakePosition + 28;

    $(`.board_field:nth-child(${snakePosition})`).addClass('down previous');

    if (nextInd < 448) {

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        checkIfApple(nextInd);

        return nextInd;
    }
    else {

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd - 448})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd - 448})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        checkIfApple(nextInd -448);

        return nextInd - 448;
    }
}

export function moveLeft(snakePosition) {
    const nextInd = snakePosition - 1;

    $(`.board_field:nth-child(${snakePosition})`).addClass('left previous');


    if (nextInd % 28 != 0) {

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();
        checkIfApple(nextInd);

        return nextInd;
    }
    else {

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd + 28})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd + 28})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        checkIfApple(nextInd+28)

        return nextInd + 28;
    }
}


