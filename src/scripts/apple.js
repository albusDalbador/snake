import * as improve from './improveSnake'

export function addApple(snakeIndex) {

    snakeIndex++;

    const color = generateAppleColor(),
        index = generateFreeFieldIndex(snakeIndex);


    $(`.board_field:nth-child(${index})`).append($(`<div id="apple" style="background-color:#${color};"></div>`));
}

function generateFreeFieldIndex(snakeIndex) {

    const index = Math.floor(Math.random()*447);

    return snakeIndex == index ? generateFreeFieldIndex(snakeIndex) : index;
}

function generateAppleColor() {
    const color  = Math.floor(Math.random()*16777215);

    return color > 1777215 ? color.toString(16) : generateAppleColor();
}

export function checkIfApple() {
    if ($('#apple').parent().children().length == 2) {
        improve.increaseScore();

        $('#apple').remove();

        addApple();

        improve.extendSnake();
    }
}