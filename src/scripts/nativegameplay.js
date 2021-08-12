 

$(document).ready(() => {

    let snakePosition = 28;

    $(window).keypress( e => {
        // addApple(1);

        const fields = Array.from(document.querySelectorAll('.board_field'));

         //from 1, for jquery selector
 

        // console.log(fields.length)

        switch (e.which) { 
            case 119:
                snakePosition = moveUp(snakePosition);
                // console.log(moveUp(snakePosition));
            break;
            case 100:
                snakePosition = moveRight(snakePosition);
            break;
            case 115:
                snakePosition = moveDown(snakePosition);
            break;
            case 97:
                snakePosition = moveLeft(snakePosition);
            break;
        }
    })
})

//apple append functions

function addApple(snakeIndex) {

    snakeIndex++;

    const color = Math.floor(Math.random()*16777215).toString(16),
        index = generateFreeFieldIndex(snakeIndex);

    $(`.board_field:nth-child(${index})`).append($(`<div id="apple" style="background-color:#${color};"></div>`));
}

function generateFreeFieldIndex(snakeIndex) {

    const index = Math.floor(Math.random()*447);

    return snakeIndex == index ? generateFreeFieldIndex(snakeIndex) : index;
}


//moving functions

function moveUp (snakePosition) {

    const nextInd = snakePosition - 28;


    if (nextInd > 0) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd + 448})`).append($('.snake_elem'));
        return nextInd + 448;
    }
}

function moveRight(snakePosition) {
    const nextInd = snakePosition + 1;

    if ( (nextInd - 1) % 28 != 0) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd - 28})`).append($('.snake_elem'));
        return nextInd - 28;
    }
}

function moveDown(snakePosition) {
    const nextInd = snakePosition + 28;

    if (nextInd < 448) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd - 448})`).append($('.snake_elem'));
        return nextInd - 448;
    }
}

function moveLeft(snakePosition) {
    const nextInd = snakePosition - 1;


    if (nextInd % 28 != 0) {
        $(`.board_field:nth-child(${nextInd})`).append($('.snake_elem'));
        return nextInd;
    }
    else {
        $(`.board_field:nth-child(${nextInd + 28})`).append($('.snake_elem'));
        return nextInd + 28;
    }
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
