const container=document.querySelector('#pixel-board');

function pixelArt(size){
    container.style.setProperty('--size',size)
    for (let i = 0; i < size * size; index+=1) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        container.appendChild(div)
    }
}
pixelArt(25)