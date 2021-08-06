
initSnake();

function initSnake(){
    for (let i = 0 ; i < 3; i++) {
        const elem = document.createElement('div');

        elem.classList.add('snake_elem');

        $('#field').append(elem);
    }

    $('.snake_elem:last').addClass('snake_head');
}