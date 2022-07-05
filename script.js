
let colorSelected=document.getElementsByClassName('selected');
const color01=document.getElementById('color01');
const color02=document.getElementById('color02');
const color03=document.getElementById('color03');
const color04=document.getElementById('color04');
const btnClear=document.getElementById('clear-board');

btnClear.addEventListener('click',function(){
console.log('clicou');
})

function colorSelectEvent() {
   color02.addEventListener('click',function (event){
colorSelected.classList.remove('selected')
colorSelected=event.target
colorSelected.classList.add('selected')
   })
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

    window.onload = function() {
        const colorBlack=document.getElementById('color01');
        colorBlack.classList.add('selected');
    }

   

