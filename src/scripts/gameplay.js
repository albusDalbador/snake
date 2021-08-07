
let direction = 115;

$(document).ready( () =>{

    $('#start_button').on('click',() => {

        
        // setInterval(() => {
        //     moveForward('down');
        // }, 80);
    })

    moveForward();
})

function moveForward(direction) {

    // $('#snake').css('width',)
    // console.log($('#snake').margin());

    // console.log(Array.from($('.snake_elem')));

    for (let i = 1 ; i <= $('.snake_elem').length; i++) {

        // console.log($(`.snake_elem:nth-child(${i})`).css('marginTop'));

        $(`.snake_elem:nth-child(${i})`)
        .css('marginTop',
            +$(`.snake_elem:nth-child(${i})`).css('marginTop').slice(0,$(`.snake_elem:nth-child(${i})`).css('marginTop').length -2) +25 + 'px')

        console.log($(`.snake_elem:nth-child(${i})`).css('marginTop').slice(0,$(`.snake_elem:nth-child(${i})`).css('marginTop').length -2));
        // $(`.snake_elem:nth-child(${i})`).style.marginTop = '100px';
        // console.log($(`.snake_elem:nth-child(${i})`).css('marginTop',100));
    }

    

    // console.log($(".snake_elem").css('marginTop'));

    switch(direction) {
        case 'up':
            console.log('up');
        break;
        case 115:
            // console.log($('snake').css);
            // $('#snake').marginTop = $('#snake').marginTop.splice(0,$('#snake').marginTop.length - 2) + 1 + 'px;'
        break;
        case 'left':
            console.log('left');
        break;
        case 'right':
            console.log('right');
        break;
    }
}

// readKey();

function readKey() {
    var game = setInterval(() => {
        moveForward(direction);
    }, 200);

    $(window).keypress( (e) => {
        console.log(e.which);
        // direction = e.which;
        clearInterval(game);

        game = setInterval(() => {
            moveForward(e.which);
        }, 80);
    })
}

