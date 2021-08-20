
$(document).ready(() => {

    const fields = Array.from(document.querySelectorAll('.board_field'));

    let snakeElems = Array.from(document.querySelectorAll('.snake_elem')).reverse();

    let snakePosition = 1;

    // let moving;
    
    $('#start_button').click(() => {

        snakeElems.forEach(item => {
            item.parentNode.classList.add('right');
            // console.log(item.parentNode.classList);
        });

        moving = setInterval(() => {
            snakeElems  = moveSnake(snakeElems,fields);
        }, 200);
    
        addApple(snakePosition);

        $('#start_button').prop('disabled', true);
    })

    $(window).keypress( e => {

        switch (e.which) { 
            case 119:
                addUpDirection();
            break;
            case 100:
                addRightDirection();
            break;
            case 115:
                addDownDirection();
            break;
            case 97:
                addLeftDirection();
            break;
            
        }

        // checkIfApple(snakePosition);

    })
})




function moveSnake(snakeElems,fields) {

    // console.log(snakeElems);
    $('.board_field:empty').removeClass('previous');

    snakeElems.forEach(item => {
    // console.log(item.parentNode.className);
        // console.log(item.parentNode.className);
        switch(item.parentNode.className.split(' ')[1]) {
            case 'up':
                moveUp(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) addUpDirection();
            break;
            case 'right':
                moveRight(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) addRightDirection();
            break;
            case 'down':
                moveDown(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) addDownDirection();
            break;
            case 'left':
                moveLeft(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) addLeftDirection();
            break;
        }
    })


    const resp = Array.from(document.querySelectorAll('.snake_elem'))

    return resp;

}



//#region moving elementary functions

function moveUp (snakePosition) {

    const nextInd = snakePosition - 28;

    // $('.board_field:empty').removeClass('previous');
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

function moveRight(snakePosition) {
    const nextInd = snakePosition + 1;

    // $('.board_field:empty').removeClass('previous');
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

function moveDown(snakePosition) {
    const nextInd = snakePosition + 28;

    // $('.board_field:empty').removeClass('previous');
    $(`.board_field:nth-child(${snakePosition})`).addClass('down previous');

    if (nextInd < 448) {
        // $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        // $(`.board_field:nth-child(${nextInd})`).append('<div class="snake_elem"></div>');

        checkIfApple(nextInd);

        return nextInd;
    }
    else {
        // $(`.board_field:nth-child(${nextInd - 448})`).append($('.snake_elem'));

        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){
            $(`.board_field:nth-child(${nextInd - 448})`).append('<div class="snake_elem head"></div>');
        } else {
            $(`.board_field:nth-child(${nextInd - 448})`).append('<div class="snake_elem"></div>');
        }

        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();

        // $(`.board_field:nth-child(${nextInd - 448})`).append('<div class="snake_elem"></div>');

        checkIfApple(nextInd -448);

        return nextInd - 448;
    }
}

function moveLeft(snakePosition) {
    const nextInd = snakePosition - 1;

    // $('.board_field:empty').removeClass('previous');
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

//#endregion


//#region  whole snake moving functions

function addUpDirection() {
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('up');
}

function addRightDirection() {
    // console.log('here');
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('right');
}

function addDownDirection() {
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('down');
}

function addLeftDirection() {
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('left');
}

//#endregion




//#region  apple functions

function addApple(snakeIndex) {

    snakeIndex++;

    const color = generateAppleColor();
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

function checkIfApple() {
    if ($('#apple').parent().children().length == 2) {
        increaseScore();

        $('#apple').remove();
        // console.log('here');

        addApple();

        extendSnake();
    }
}

//#endregion




//#region gameplay

function increaseScore() {
    $('#score_value').text( () => {
        return +$('#score_value').text() +1;
    })
}

function extendSnake() { 
    console.log('extended');
    $('.previous:empty').append('<div class="snake_elem"></div>');
    $('.previous').removeClass('previous')
}


function endGame(moving) {
    clearImmediate(moving);

    alert("it seem's you've lost");
}

//#endregion



 