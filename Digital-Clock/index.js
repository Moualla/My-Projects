const hourel = document.getElementById("hour");
const minutEl = document.getElementById("Minutes");
const secEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");

function updatclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM"

    if( h > 12){
        h = h-12 ;
        am ="PM";
    }

    h = h<10 ? "0"+ h : h ;
    m = m<10 ? "0"+ m : m ;
    s = s<10 ? "0"+ s : s ;

    hourel.innerText = h;
    minutEl.innerText= m;
    secEl.innerText= s;
    ampmEl.innerText= am;

    setTimeout(()=>{
        updatclock()
    },1000)
}

updatclock()


