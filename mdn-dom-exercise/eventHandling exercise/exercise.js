let ballon = document.querySelector('.ballon');
let fontSize = window.getComputedStyle(ballon).fontSize;
let initialSize = parseFloat(fontSize);
document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === 'ArrowUp') {
        initialSize += initialSize * .10;
        ballon.setAttribute('style', `font-size: ${initialSize}px`);
        console.log(initialSize);
        event.preventDefault();
    }

    if (event.key === 'ArrowDown') {
        initialSize -= initialSize * .10;
        initialSize ++;
        ballon.setAttribute('style', `font-size: ${initialSize}px`);
        console.log(initialSize)
        event.preventDefault();
    }

    if (initialSize > 740) {
        ballon.innerHTML = '&#x1F4A5';
    }
    
});

let space = document.querySelector('.mousetrail');
let lastX;
let lastY;
const rect = space.getBoundingClientRect();
// let {initialX, initialY} = 
space.addEventListener('mousemove', (event) => {
    if(event.button === 0) {
        lastX = event.clientX - rect.left;
        lastY = event.clientY - rect.top;
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerHTML = '&#x1F337';
        space.appendChild(flower);
        flower.setAttribute('style', `top: ${lastY}px; left: ${lastX}px;`);
    }
    childrenLimit(20);
});

function childrenLimit(count) {
    while (space.childElementCount > count) {
        space.removeChild(space.firstElementChild);
    }
}