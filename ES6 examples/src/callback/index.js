'use strict';



let callback = () => {

    // Обращение к конкретному элементу при помощи this

    let items = document.querySelectorAll('.item');

    for (let item of items) {

        item.onclick = activeItem;

    }
}


// ссылание на .item
function activeItem() {

    this.classList.toggle('active');

    /* Не сработает, потому что функция извне, нет замыкания */
    //  console.log(item);
}

// не сработает, будет вызывать в рамках глобального контекста
// setInterval(activeItem, 500);


document.addEventListener('DOMContentLoaded', callback);