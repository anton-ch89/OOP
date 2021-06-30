window.addEventListener("DOMContentLoaded", function (){

"use strict";

let body = document.querySelector('body');
body.style.margin = '0';

class DomElement { 
constructor (selector, height, width, bg, fontSize) {
this.selector = selector;
this.height = height;
this.width = width;
this.bg = bg;
this.fontSize = fontSize;
}


create () {
    let newDiv = document.createElement('div');
    if(this.selector[0] === '.'){
        newDiv.classList.add(this.selector.slice(1));
        body.append(newDiv);
    }else if(this.selector[0] === '#'){
        newDiv.id = this.selector.slice(1);
        body.append(newDiv);
}
newDiv.style.cssText = `height: ${this.height}px;
width: ${this.width}px;
background: ${this.bg};
font-size: ${this.fontSize}px;
position: absolute;
`;

newDiv.textContent = 'Новый элемент';



}
moving  () {
    const elem = document.querySelector('div');
    let counterX = 0,
      counterY = 0;
    document.onkeydown =(e)=>{

        if(e.key === 'ArrowRight') {
            counterX += 10;
            elem.style.left = counterX + 'px';
        }
        else if(e.key === 'ArrowLeft') {
            counterX -= 10;
            elem.style.left = counterX + 'px';
        }
        else if(e.key === 'ArrowUp') {
            counterY -= 10;
            elem.style.top = counterY + 'px';
        }
        else if(e.key === 'ArrowDown') {
            counterY +=10;
            elem.style.top =  counterY + 'px';
            
            
        }
    };

}
}

const domEl = new DomElement('#block', 100, 100, 'blue', 14);

domEl.create();
domEl.moving();

});