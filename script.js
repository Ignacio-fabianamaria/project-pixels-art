const color=document.getElementsByClassName('color');

const color01 = document.getElementById('color01');
const color02 = document.getElementById('color02');
const color03 = document.getElementById('color03');
const color04 = document.getElementById('color04');

const paletaCores = document.getElementById('#color-palette');

const container = document.getElementById('pixel-board');

const btnClear = document.getElementById('clear-board');
const div=document.getElementsByClassName('pixel');

let  colorSelected;
let newColor;


function initialColor(){
    colorSelected=color01;
    colorSelected.classList.add('selected');
}
initialColor()

 color01.addEventListener('click', chooseColor) 
 color02.addEventListener('click', chooseColor) 
 color03.addEventListener('click', chooseColor) 
 color04.addEventListener('click', chooseColor) 

function chooseColor(event){
    let targetColor=event.target;
    for(index=0;index< color.length;index+=1){
        if (color[index].classList.contains('selected')) {
            color[index].classList.remove('selected')  
        }
    }
    targetColor.classList.add('selected')

    }

    
        //for( const pixel of div){
            
                //let chooseColor=document.getElementsByClassName('selected');
                //let chooseColorStyle=chooseColor.style.backgroundColor
        function applyColor(event) {
                    let propriedades = getComputedStyle(document.querySelector('.selected')).backgroundColor;
                    event.target.style.backgroundColor = propriedades;
                
            
        }
    

    for (let i = 0; i < 25; i += 1) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        

        container.appendChild(div)
    }

function clear() {
    btnClear.addEventListener('click', function () {
        const divPixel=document.getElementsByClassName('pixel')
        console.log('click');
        for (let index = 0; index < divPixel.length; index += 1) {
            divPixel[index].style.backgroundColor = 'rgb(255,255,255)'
            
        }
    })
}

container.addEventListener('click',applyColor)



clear()


    