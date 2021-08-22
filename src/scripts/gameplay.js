
import * as action from './moving'
import * as forward from './direction'

export default function moveSnake(snakeElems,fields) {

    $('.board_field:empty').removeClass('previous');

    snakeElems.forEach(item => {

        switch(item.parentNode.className.split(' ')[1]) {
            case 'up':
                action.moveUp(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) 
                    forward.addUpDirection();
            break;
            case 'right':
                action.moveRight(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) 
                    forward.addRightDirection();
            break;
            case 'down':
                action.moveDown(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) 
                    forward.addDownDirection();
            break;
            case 'left':
                action.moveLeft(fields.indexOf(item.parentNode) + 1);
                if (item.classList.contains('head')) 
                    forward.addLeftDirection();
            break;
        }
    })


    const resp = Array.from(document.querySelectorAll('.snake_elem'))

    return resp;

}