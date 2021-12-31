const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

class Countdown {
    constructor(eventTime){
        this.eventTime = new Date(eventTime).getTime();
        // this.now = new Date().getTime();
        // this.gap = this.eventTime - this.now;
        this.sec = 1000;
        this.min = this.sec * 60;
        this.hr = this.min * 60;
        this.d = this.hr * 24;
        // the bind() method returns a copy of the function counter with the specific this value
        setInterval(this.counter.bind(this), 1000);     //The bind() method returns a new function, when invoked, has its this sets to a specific value.
        
        // setInterval(this.counter.bind(this), 1000);
        // setInterval(function(){
        //     this.counter();
        // }, 1000);
    }

    counter() {
        const now = new Date().getTime();
        const gap = this.eventTime - now;
        // console.log(gap, "hehe");
        const textDay = Math.floor(gap / this.d);
        const textHour = Math.floor((gap % this.d) / this.hr);
        const textMinute = Math.floor((gap % this.hr) / this.min);
        const textSecond = Math.floor((gap % this.min) / this.sec);

        this.updateUi(textDay, textHour, textMinute, textSecond);
    }

    // start = function () {
    //     console.log("inside", this.gap);    
    //     this.interval = setInterval( () => {this.counter()}, 1000);
    //     };

    updateUi(textDay, textHour, textMinute, textSecond) {
        day.innerText = textDay;
        hour.innerText = textHour;
        minute.innerText = textMinute;
        second.innerText = textSecond;
    }
    
}

const countdown = new Countdown("Jan 1, 2022 00:00:00");
// countdown.start();