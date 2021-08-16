

initBoard();

initSnake();


function initSnake(){

    for (let i = 1; i <= 1; i++) {

        $(`.board_field:nth-child(${i})`).append('<div class="snake_elem tail head" ></div>')
    }

     
}

function initBoard() {
    for (let i = 0 ; i < 448; i++) {
        // const elemt = document.createElement('')
        $('#board').append('<div class="board_field"></div>');
    }
}

