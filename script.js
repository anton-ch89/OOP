"use strict";

let body = document.querySelector('body');

function DomElement (selector, height, width, bg, fontSize) {
this.selector = selector;
this.height = height;
this.width = width;
this.bg = bg;
this.fontSize = fontSize;

}

DomElement.prototype.create = function () {
    let newDiv = document.createElement('div');
    if(this.selector[0] === '.'){
        newDiv.classList.add(this.selector.slice(1));
        body.append(newDiv);
    }else if(this.selector[0] === '#'){
        newDiv.id = this.selector.slice(1);
        body.append(newDiv);
}
newDiv.style.height = this.height + 'px';
newDiv.style.width = this.width + 'px';
newDiv.style.background  = this.bg;
newDiv.style.fontSize  = this.fontSize + 'px';
newDiv.textContent = 'Новый элемент';

};
const domEl = new DomElement('#block', 400, 400, 'red', 36);

domEl.create();
