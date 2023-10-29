const container = document.querySelector(".container");
const leftdash = document.querySelector(".leftdash");
const rightdash = document.querySelector(".rightdash");
const upbottom = document.querySelector(".upbottom");
const downbottom = document.querySelector(".downbottom");
const slidlength = rightdash.querySelectorAll('div').length;

let activeSlidIndex = 0;
leftdash.style.top =` -${(slidlength - 1) * 100}vh `

upbottom.addEventListener('click',() => changeSlide('up'));
downbottom.addEventListener('click',() => changeSlide('down'));

const changeSlide = (direction) => {
    const slidheight = container.clientHeight
    if(direction === 'up'){
        activeSlidIndex++
    if(activeSlidIndex > slidlength -1 ){
            activeSlidIndex = 0;
        }
    } else if(direction === 'down'){
        activeSlidIndex--
        if(activeSlidIndex <0 ){
                activeSlidIndex = slidlength - 1;
    }
}
    rightdash.style.transform = ` translateY(-${activeSlidIndex * slidheight}px)`
    leftdash.style.transform = ` translateY(${activeSlidIndex * slidheight}px)`
    
}

