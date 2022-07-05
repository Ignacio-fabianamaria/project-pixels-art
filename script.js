window.onload = function() {
    const colorBlack=document.getElementById('color01');
    colorBlack.classList.add('selected');
}

const container=document.getElementById('pixel-board');

function pixelArt(size){
    container.style.setProperty('--size',size)
    for (let i = 0; i < size*size; i+=1) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        container.appendChild(div)
    }
    }

    pixelArt(5)
    

