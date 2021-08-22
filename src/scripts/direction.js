

export function addUpDirection() {
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('up');
}

export function addRightDirection() {
    // console.log('here');
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('right');
}

export function addDownDirection() {
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('down');
}

export function addLeftDirection() {
    $('.head').parent().removeClass('up down left right');
    $('.head').parent().addClass('left');
}