const color=document.getElementsByClassName('color');

const color01 = document.getElementById('color01');
const color02 = document.getElementById('color02');
const color03 = document.getElementById('color03');
const color04 = document.getElementById('color04');

const paletaCores = document.getElementById('#color-palette');

const container = document.getElementById('pixel-board');

const btnClear = document.getElementById('clear-board');
let  colorSelected;
let newColor;


function initialColor(){
    colorSelected=color01;
    colorSelected.classList.add('selected');
}

chooseColor(paletaCores);

function chooseColor(){
    color01.addEventListener('click', function () {
        
        color01.classList.add('selected');
        color02.classList.remove('selected');
        color03.classList.remove('selected');
        color04.classList.remove('selected');
    });
    color02.addEventListener('click', function () {
        
        color02.classList.add('selected');
        color01.classList.remove('selected');
        color03.classList.remove('selected');
        color04.classList.remove('selected');
    });
    
    color03.addEventListener('click', function () {
        
        color03.classList.add('selected');
        color02.classList.remove('selected');
        color01.classList.remove('selected');
        color04.classList.remove('selected');
    });
    
    color04.addEventListener('click', function () {
        
        color04.classList.add('selected');
        color02.classList.remove('selected');
        color03.classList.remove('selected');
        color01.classList.remove('selected');
    })

}


function applyColor(event){
    chooseColor(paletaCores)
    let newColor=colorSelected.style.backgroundColor;
    container.target.style.backgroundColor=newColor;
    console.log(newColor);
}
/*function colorSelected(event){
    for (let x=0;x< paletaCores.children.length;x+=1){
        if(paletaCores.children[x].classList=='selected')
        paletaCores.children.classList.remove('selected')
    }
    
    for (let y = 0; y < paletaCores.children.length; y+=1) {
    paletaCores.children[y].addEventListener('click',function(){
        event.target.classList.add('selected')
    })
          
    }
    
}*/

/*color01.addEventListener('click', colorSelected)
color02.addEventListener('click', colorSelected)
color03.addEventListener('click', colorSelected)
color04.addEventListener('click', colorSelected)*/



    for (let i = 0; i < 25; i += 1) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        div.addEventListener('click',function(event){
         div[i].style.backgroundColor=newColor.style.backgroundColor
    console.log('clickou');
})
        container.appendChild(div)
    }





//for (let x = 0; x < document.getElementsByClassName('pixel').length; x+=1) 
//{
  //  const pixelDiv = document.getElementsByClassName('pixel')[x];
    //pixel.addEventListener('click',applyColor);
    
//}


function clear() {
    btnClear.addEventListener('click', function () {
        const divPixel=document.getElementsByClassName('pixel')
        console.log('click');
        for (let index = 0; index < divPixel.length; index += 1) {
            divPixel[index].style.backgroundColor = 'rgb(255,255,255)'
            
        }
    })
}





clear()
window.onload = initialColor;
    


