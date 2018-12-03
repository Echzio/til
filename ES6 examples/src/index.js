'use strict';

function ready(e) {


    const test = 50;
    // object
    const settings = {
        a: 10,
        b: 20,
        c: 30
    }
    // console.log(settings);


    /**********************************/
    timer2(5);
    timer2();
    timer2(0);

    function timer(t) {
        // старая универсальная проверка 
        let time = (typeof t === 'undefined') ? 60 : t;
        // console.log(time);
    }
    // новая универсальная проверка
    function timer2(time = 60) {
        // console.log(time);
    }
    /************************************/



    // let str = some('test', 'nz', 7, 3, 4);
    // document.querySelector('body').innerHTML = str;


    //spread-оператор
    /*
    function some(name, lastname, ...marks) {


        let sum = 0;

        for (let m of marks) {
            sum += m;
        };

        let avg = sum / marks.length;
        // интерполяция из предпроцессоров
        let res = `<div>${name} ${lastname}<strong> ${avg}</strong></div>`;

        return res;
    };
    */

    let t1 = new ConsoleTimer(180);
    t1.run();
};


/*************************/
// ООП
class MyTimer {
    constructor(t = 100) {
        this.time = t;
    }
    tick() {
        this.time--;
    }
    run() {
        // стрелочные функции сохряняют контекст
        setInterval(() => {
            this.tick();
        }, 1000);
    }
}

class ReverseTimer extends MyTimer {
    tick() {
        this.time++;
    }

}

class ConsoleTimer extends ReverseTimer {
    tick() {
        super.tick();
        console.log(this.time);
    }

}




document.addEventListener('DOMContentLoaded', ready);