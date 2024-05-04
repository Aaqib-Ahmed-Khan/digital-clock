function clock() {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period = document.getElementById('period');

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";
    if(h>12){
        h=h-12;
    }
    s= (s< 10 )? "0"+ s:s;
    h= (h< 10 )? "0"+ h:h;
    m= (m< 10 )? "0"+ m:m;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
};

setInterval(clock, 1000);
