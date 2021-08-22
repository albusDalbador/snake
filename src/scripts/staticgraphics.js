 
export function initSnake(){
 
    for (let i = 1; i <= 2; i++) {
        $(`.board_field:nth-child(${i})`).append('<div class="snake_elem "></div>')
    }

    $(`.board_field:nth-child(${3})`).append('<div class="snake_elem head"></div>')  
}

export function initBoard() {
    for (let i = 0 ; i < 448; i++) {
        $('#board').append('<div class="board_field"></div>');
    }
}

