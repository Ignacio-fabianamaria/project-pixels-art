
const color01=document.getElementById('color01');
const color02=document.getElementById('color02');
const color03=document.getElementById('color03');
const color04=document.getElementById('color04');
const paletaCores = document.querySelectorAll('#color-palette');
let colorSelected = document.getElementById('color01');
const btnClear = document.getElementById('clear-board');


color01.addEventListener('click', function(){
    let saveColor01=color01.style.backgroundColor;
    color01.classList.add('selected');
    color02.classList.remove('selected');
    color03.classList.remove('selected');
    color04.classList.remove('selected');
});
color02.addEventListener('click', function(){
    let saveColor02=color02.style.backgroundColor;
    color02.classList.add('selected');
    color01.classList.remove('selected');
    color03.classList.remove('selected');
    color04.classList.remove('selected');
});

color03.addEventListener('click', function(){
    let savecolor03=color03.style.backgroundColor;
    color03.classList.add('selected');
    color02.classList.remove('selected');
    color01.classList.remove('selected');
    color04.classList.remove('selected');
});

color04.addEventListener('click', function(){
    let savecolor04=color04.style.backgroundColor;
    color04.classList.add('selected');
    color02.classList.remove('selected');
    color03.classList.remove('selected');
    color01.classList.remove('selected');
})





const container = document.getElementById('pixel-board');

function pixelArt(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i += 1) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        container.appendChild(div)
    }
}

pixelArt(5)



btnClear.addEventListener('click', function () {
    container.innerHTML = ''
    pixelArt(5)
    color01.classList.add('selected')
});

window.onload = function () {
    colorSelected = color01;
    colorSelected.classList.add('selected');
}



