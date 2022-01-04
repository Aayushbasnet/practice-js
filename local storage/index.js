const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const celebration = document.querySelector('.celebration');
const image = document.querySelector('.celebration-image')
const comingSoon = document.querySelector('.coming-soon');
const ironMan = "../images/iron-man-snap.gif";
const lightning = "../images/new-year.gif";


displayCelebration = () =>{
    celebration.style.display = "block";
    comingSoon.style.display = "none";
    console.log(image.getAttribute('src'));
    setTimeout(()=>{
        if(image.getAttribute('src') == ironMan){
            image.setAttribute('src', lightning);
        }
    }, 1400);
    
}
// const imageAlt = setTimeout(displayCelebration, 3000);
class Countdown {
    constructor(eventTime){
        this.eventTime = new Date(eventTime).getTime();
        this.sec = 1000;
        this.min = this.sec * 60;
        this.hr = this.min * 60;
        this.d = this.hr * 24;
        this.currSecValue = -1;
        this.currMinValue = -1;
        this.currHrValue = -1;
        this.currDValue = -1;
        // the bind() method returns a copy of the function counter with the specific this value
        this.setInterval = setInterval(this.counter.bind(this), 1000);     //The bind() method returns a new function, when invoked, has its this sets to a specific value.
    }

    counter() {
        const now = new Date().getTime();
        const gap = this.eventTime - now;
        console.log(gap);
        // console.log(gap, "hehe");
        const textDay = Math.floor(gap / this.d);
        const textHour = Math.floor((gap % this.d) / this.hr);
        const textMinute = Math.floor((gap % this.hr) / this.min);
        const textSecond = Math.floor((gap % this.min) / this.sec);

        if(gap < 1000){
            clearInterval(this.setInterval);
            displayCelebration();
        }

        this.updateUi(textDay, textHour, textMinute, textSecond, gap);
    }

    updateUi(textDay, textHour, textMinute, textSecond,gap) {
        if(gap <= 0){
            day.classList.remove("change"); 
            hour.classList.remove("change");
            minute.classList.remove("change"); 
            second.classList.remove("change");
        }else{
            this.currDValue = day.innerText; 
            textDay = (textDay < 10) ? "0" + textDay : textDay.toString();
            if(this.currDValue !== textDay){
                day.classList.add("change");
            }else{
                day.classList.remove("change");
            }
            day.innerText = textDay;

            this.currHrValue = hour.innerText; 
            textHour = (textHour < 10) ? "0" + textHour : textHour.toString();
            if(this.currHrValue !== textHour){
                hour.classList.add("change");
            }else{
                hour.classList.remove("change");
            }
            hour.innerText = textHour;

            this.currMinValue = minute.innerText; 
            textMinute = (textMinute < 10) ? "0" + textMinute : textMinute.toString();
            if(this.currMinValue !== textMinute){
                minute.classList.add("change");
            }else{
                minute.classList.remove("change");
            }
            minute.innerText = textMinute;
            
            this.currSecValue = second.innerText; 
            textSecond = (textSecond < 10) ? "0" + textSecond : textSecond.toString();
            if(this.currValue !== textSecond){
                second.classList.add("change");
            }else{
                second.classList.remove("change");
            }   
            second.innerText = textSecond; 
        }   
    }
}

const countdown = new Countdown("Jan 3, 2022 21:02:00");
// countdown.start();