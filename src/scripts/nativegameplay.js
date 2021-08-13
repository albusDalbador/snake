
$(document).ready(() => {

    const fields = Array.from(document.querySelectorAll('.board_field'));

    let snakePosition = 1;

    let moving;
    
    $('#start_button').click(() => {

        moving = setInterval(() => {
            snakePosition = moveRight(snakePosition);
        }, 175);
    
        addApple(snakePosition);

        $('#start_button').prop('disabled', true);
    })

    $(window).keypress( e => {

        switch (e.which) { 
            case 119:
                clearInterval(moving);
                moving = setInterval(() => {
                    snakePosition = moveUp(snakePosition);
                }, 175);
                // snakePosition = moveUp(snakePosition);
            break;
            case 100:
                clearInterval(moving);
                moving = setInterval(() => {
                    snakePosition = moveRight(snakePosition);
                }, 175);
                // snakePosition = moveRight(snakePosition);
            break;
            case 115:
                clearInterval(moving);
                moving = setInterval(() => {
                    snakePosition = moveDown(snakePosition);
                }, 175);
                // snakePosition = moveDown(snakePosition);
            break;
            case 97:
                clearInterval(moving);
                moving = setInterval(() => {
                    snakePosition = moveLeft(snakePosition);
                }, 175);
                // snakePosition = moveLeft(snakePosition);
            break;
            
        }

        checkIfApple(snakePosition);

    })
})



//moving functions

function moveUp (snakePosition) {

    const nextInd = snakePosition - 28;


    if (nextInd > 0) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        checkIfApple(nextInd);
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd + 448})`).append($('.snake_elem'));
        checkIfApple(nextInd + 448);
        return nextInd + 448;
    }
}

function moveRight(snakePosition) {
    const nextInd = snakePosition + 1;

    if ( (nextInd - 1) % 28 != 0) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        checkIfApple(nextInd);
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd - 28})`).append($('.snake_elem'));
        checkIfApple(nextInd -28);
        return nextInd - 28;
    }
}

function moveDown(snakePosition) {
    const nextInd = snakePosition + 28;

    if (nextInd < 448) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        checkIfApple(nextInd);
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd - 448})`).append($('.snake_elem'));
        checkIfApple(nextInd -448);
        return nextInd - 448;
    }
}

function moveLeft(snakePosition) {
    const nextInd = snakePosition - 1;


    if (nextInd % 28 != 0) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        checkIfApple(nextInd)
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd + 28})`).append($('.snake_elem'));
        checkIfApple(nextInd+28)
        return nextInd + 28;
    }
}


//apple functions

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

function checkIfApple(snakePosition) {
    if ($(`.board_field:nth-child(${snakePosition})`).children().length == 2) {
        increaseScore();

        $('#apple').remove();
        console.log('here');

        addApple();
    }
}

function generateAppleColor() {
    const color  = Math.floor(Math.random()*16777215);

    return color > 1777215 ? color.toString(16) : generateAppleColor();
}



// the rest stuff

function increaseScore() {
    $('#score_value').text( () => {
        return +$('#score_value').text() +1;
    })
}

function extendSnake() {    
    
}





//functions returning fields
function leftField(index) {
    $(`.board_field:nth-child(${index})`).prev().css('background-color','orange');
}

function rightField(index) {
    $(`.board_field:nth-child(${index})`).next().css('background-color','red');
}

function topField(index) {
    $(`.board_field:nth-child(${index - 28})`).css('background-color','purple');
}

function bottomField(index) {
    $(`.board_field:nth-child(${index + 28})`).css('background-color','green');
}
