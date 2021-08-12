
let direction = 115;

// let fileds = readBoard2D();


const fields = Array.from(document.querySelectorAll('.board_field'));
// console.log(fields);
 


// console.log($(`.snake_elem:nth-child(${2})`));
console.log($('.snake_elem'));


$(document).ready(() => {
    $('.snake_elem').each(index => {
        console.log($(this));
    })
})


$(`.snake_elem`).click( () => {
    console.log(fields.indexOf($(this).find('.snake_elem')));
    console.log(this);
    // $(this).css('background-color','red');
})

 
 
function moveElemRight(elem) {
    // console.log(elem);
}

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




 


function readBoard2D() {
    const stepArray = Array.from(document.querySelectorAll('.board_field'));

    let squares2D = new Array();
    
    while (stepArray.length) squares2D.push(stepArray.splice(0,28));

    return squares2D;
}


 
 

 
 

// function readKey() {
//     var game = setInterval(() => {
//         moveForward(direction);
//     }, 200);

//     $(window).keypress( (e) => {
//         console.log(e.which);
//         // direction = e.which;
//         clearInterval(game);

//         game = setInterval(() => {
//             moveForward(e.which);
//         }, 80);
//     })
// }





