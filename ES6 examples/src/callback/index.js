'use strict';

let callback = () => {

    let item = document.querySelector('.item');

    item.onclick = activeItem;


}



// ссылание на .item
function activeItem () {
    this.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', callback);