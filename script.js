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



for( const colorr of color){
    colorr.addEventListener('click',function(event){
        for( let colorr of color){
            colorr.classList.remove('selected');
        }
        event.target.classList.add('selected')
        });
    }

    function applyColor(){
        for( const pixel of div){
            pixel.addEventListener('click',function(event){
                const chooseColor=document.getElementsByClassName('selected').backgroundColor;
                event.target.style.backgroundColor=chooseColor;
            });
        }
    }



    
  



/*function applyColor(event){
    chooseColor(paletaCores)
    let newColor=colorSelected.style.backgroundColor;
    div.target.style.backgroundColor=newColor;
    console.log(newColor);
}*/
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
        div.addEventListener('click',function (applyColor){
        // div.style.backgroundColor=newColor.style.backgroundColor
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
    


