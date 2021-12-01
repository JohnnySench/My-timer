'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const deadline = '2022-05-22';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              months = Math.floor(t / (1000 * 60 * 60 * 24 * 30)),
              days = Math.floor((t / (1000 * 60 * 60 * 24)) % 30),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return {
            t,
            months,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(endtime) {
        const months = document.querySelectorAll('[data-main-number]'),
              days = document.querySelectorAll('[data-days]'),
              hours = document.querySelectorAll('[data-hours]'),
              minutes = document.querySelectorAll('[data-minutes]'),
              seconds = document.querySelectorAll('[data-seconds]'),
              timerClock = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            
            months.forEach(month => {
                month.innerHTML = t.months;
            });
            days.forEach(day => {
                day.innerHTML = t.days;
            });
            hours.forEach(hour => {
                hour.innerHTML = t.hours;
            });
            minutes.forEach(minute => {
                minute.innerHTML = t.minutes;
            });
            seconds.forEach(second => {
                second.innerHTML = t.seconds;
            });

            if (t < 0) {
                clearInterval(timerClock);
                months.forEach(month => {
                    month.innerHTML = 0;
                });
                days.forEach(day => {
                    day.innerHTML = 0;
                });
                hours.forEach(hour => {
                    hour.innerHTML = 0;
                });
                minutes.forEach(minute => {
                    minute.innerHTML = 0;
                });
                seconds.forEach(second => {
                    second.innerHTML = 0;
                });
            }
            
        }
    }
    setClock(deadline);
    
});