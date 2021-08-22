export function increaseScore() {
    $('#score_value').text( () => {
        return +$('#score_value').text() +1;
    })
}

export function extendSnake() { 
    console.log('extended');
    $('.previous:empty').append('<div class="snake_elem"></div>');
    $('.previous').removeClass('previous')
}