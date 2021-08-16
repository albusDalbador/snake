



$(document).ready(() => {

    const fields = Array.from(document.querySelectorAll('.board_field'));

    let snakePosition = 1;

    let snakeElems = Array.from(document.querySelectorAll('.snake_elem'));
    // console.log(snakeElems);

    let moving;
    
    $('#start_button').click(() => {

         
        addApple(snakePosition);

        $('#start_button').prop('disabled', true);
    })

    $(window).keypress( e => {

        switch (e.which) { 
            case 119:
                snakeElems = moveSnakeUp(fields,snakeElems);
                // snakeElems.forEach( item => {
                //     console.log(item);
                // })
            break;
            case 100:
                snakeElems = moveSnakeRight(fields,snakeElems);
                // snakeElems.forEach( item => {
                //     console.log(item);
                // })
            break;
            case 115:
                snakeElems = moveSnakeDown(fields,snakeElems);
                // snakeElems.forEach( item => {
                //     console.log(item);
                // })
            break;
            case 97:
                snakeElems = moveSnakeLeft(fields,snakeElems);
                // snakeElems.forEach( item => {
                //     console.log(item);
                // })
            break;
            
        }

        // checkIfApple(snakePosition);

    })
})


//advanced moving functions

function moveSnakeUp(fields,elems) {
    addUpTurn();

    elems.forEach(elem => {
        // console.log(elem.parentNode);
        switch (elem.parentNode.className.split(' ')[2]) {
            case 'up':
                moveUp(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'right':
                moveRight(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'down':
                moveDown(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'left':
                moveLeft(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;
        }
    });
    return Array.from(document.querySelectorAll('.snake_elem'));
}

function moveSnakeRight(fields,elems) {
    addRightTurn();

    elems.forEach(elem => {
        // console.log(elem.parentNode);
        switch (elem.parentNode.className.split(' ')[2]) {
            case 'up':
                moveUp(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'right':
                moveRight(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'down':
                moveDown(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'left':
                moveLeft(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;
        }
    });
    return Array.from(document.querySelectorAll('.snake_elem'));
}

function moveSnakeDown(fields,elems) {
    addDownTurn();

    elems.forEach(elem => {
        // console.log(elem.parentNode);
        switch (elem.parentNode.className.split(' ')[2]) {
            case 'up':
                moveUp(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'right':
                moveRight(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'down':
                moveDown(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'left':
                moveLeft(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;
        }
    });
    return Array.from(document.querySelectorAll('.snake_elem'));
}

function moveSnakeLeft(fields,elems) {
    addLeftTurn();

    elems.forEach(elem => {
        // console.log(elem.parentNode);
        switch (elem.parentNode.className.split(' ')[2]) {
            case 'up':
                moveUp(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'right':
                moveRight(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'down':
                moveDown(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;

            case 'left':
                moveLeft(fields.indexOf(elem.parentNode) + 1,elem,fields)
            break;
        }
    });
    return Array.from(document.querySelectorAll('.snake_elem'));
}



//snake turn functions

function addRightTurn() {
    $('.board_field:empty').removeClass('turn right down left up');
    $('#apple').parent().removeClass('turn right down left up')
    $('.snake_elem, .head').parent().addClass('turn right');
}

function addDownTurn() {
    $('.board_field:empty').removeClass('turn right down left up');
    $('#apple').parent().removeClass('turn right down left up')
    $('.snake_elem, .head').parent().addClass('turn down');
}

function addLeftTurn() {
    $('.board_field:empty').removeClass('turn right down left up');
    $('#apple').parent().removeClass('turn right down left up')
    $('.snake_elem, .head').parent().addClass('turn left');
}

function addUpTurn() {
    $('.board_field:empty').removeClass('turn right down left up');
    $('#apple').parent().removeClass('turn right down left up')
    $('.snake_elem, .head').parent().addClass('turn up');
}


//basic moving functions

function moveUp (snakePosition, elem,fields) {


    const nextInd = snakePosition - 28;

    $('#board div').removeClass('prev_step');
    $(`.board_field:nth-child(${snakePosition})`).addClass('prev_step');

    if (nextInd > 0) {
        // $(`.board_field:nth-child(${nextInd})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));

        elem.remove()
        // fields[nextInd-1].append(elem);

        checkIfApple(nextInd);
        return nextInd;
    }
    else {
        // $(`.board_field:nth-child(${nextInd + 448})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));
        
        // fields[snakePosition-1].removeChild(elem);

        elem.remove();
        // fields[nextInd+447].append(elem);

        checkIfApple(nextInd + 448);
        return nextInd + 448;
    }
}

function moveRight(snakePosition, elem,fields) {
    const nextInd = snakePosition + 1;

    $('#board div').removeClass('prev_step');
    $(`.board_field:nth-child(${snakePosition})`).addClass('prev_step');

    if ( (nextInd - 1) % 28 != 0) {
        // $(`.board_field:nth-child(${nextInd})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));
        
        fields[snakePosition-1].removeChild(elem);
        fields[nextInd-1].append(elem);

        checkIfApple(nextInd);
        return nextInd;
    }
    else {
        // $(`.board_field:nth-child(${nextInd - 28})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));

        fields[snakePosition-1].removeChild(elem);
        fields[nextInd-1-28].append(elem);

        checkIfApple(nextInd -28);
        return nextInd - 28;
    }
}

function moveDown(snakePosition, elem,fields) {
    const nextInd = snakePosition + 28;

    // console.log('move Down')

    $('#board div').removeClass('prev_step');
    $(`.board_field:nth-child(${snakePosition})`).addClass('prev_step');

    if (nextInd <= 448) {
        // $(`.board_field:nth-child(${nextInd})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));
        
        fields[snakePosition-1].removeChild(elem);
        fields[nextInd-1].append(elem);

        checkIfApple(nextInd);
        return nextInd;
    }
    else {
        // $(`.board_field:nth-child(${nextInd - 448})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));
        
        fields[snakePosition-1].removeChild(elem);
        fields[nextInd-449].append(elem);

        checkIfApple(nextInd -448);
        return nextInd - 448;
    }
}

function moveLeft(snakePosition, elem,fields) {
    const nextInd = snakePosition - 1;

    $('#board div').removeClass('prev_step');
    $(`.board_field:nth-child(${snakePosition})`).addClass('prev_step');


    if (nextInd % 28 != 0) {
        // $(`.board_field:nth-child(${nextInd})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));
        
        fields[snakePosition-1].removeChild(elem);
        fields[nextInd-1].append(elem);

        checkIfApple(nextInd)
        return nextInd;
    }
    else {
        // $(`.board_field:nth-child(${nextInd + 28})`).append($(`.board_field:nth-child(${snakePosition})`).find('.snake_elem'));
        
        fields[snakePosition-1].removeChild(elem);
        fields[nextInd-1+28].append(elem);

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

    if ($(`.board_field:nth-child(${snakePosition})`).find($('#apple'))) {

        increaseScore();

        extendSnake();

        $('#apple').remove();

        addApple(snakePosition);
    }
}

function generateAppleColor() {
    const color  = Math.floor(Math.random()*16777215);

    return color > 1777215 ? color.toString(16) : generateAppleColor();
}


//snake manipulation

function extendSnake() {    
    $('.snake_elem, .tail').removeClass('tail');
    $('.prev_step:empty').append('<div class="snake_elem tail" ></div>');
    $('.prev_step').removeClass('prev_step');
}




// the rest stuff

function increaseScore() {
    // console.log($('#apple'));
    $('#score_value').text( () => {
        return +$('#score_value').text() +1;
    })
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
