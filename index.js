let body = document.getElementById('body');
let w = window.innerWidth;
let h = window.innerHeight;

for (let index = 0; index < 75; index++) {
    let flocon = document.createElement('div');
    flocon.classList.add('neige');
    taille(flocon);
    posNeige(flocon);
    body.appendChild(flocon);
}

function taille(lui) {
    let laTaille = Math.floor(Math.random() * Math.floor(3));
    if (laTaille == 0) {
        lui.classList.add('petit');
    }
    else if (laTaille == 1) {
        lui.classList.add('moyen');
    }
    else if (laTaille == 2) {
        lui.classList.add('petit');
    }
}

function posNeige(lui) {
        let laTaille = Math.floor(Math.random() * Math.floor(-w/4));
        lui.style.left = laTaille+"vw";
        let taille = Math.floor(Math.random() * Math.floor(-h/4));
        lui.style.top = taille+"vh";
}

let emplacementFlocon = 0;
let ceFlocon = document.getElementsByClassName('neige');


setInterval(function(){
    
    for (let index = 0; index < ceFlocon.length; index++) {
        const element = ceFlocon[index];
        emplacementFlocon = element.offsetTop;
        emplacementFloconL = element.offsetLeft;
        
        if (emplacementFlocon > w*2.5 || emplacementFloconL > h*2.5) {

            element.remove();
            let flocon = document.createElement('div');
            flocon.classList.add('neige');
            taille(flocon);
            posNeige(flocon);
            body.appendChild(flocon);
        }
    }
    
}, 1000);


function apersu() {
    let recupMess = document.getElementById("mess").value;
    let hidePut = document.getElementById("recupMess");

    let recupMail = document.getElementById("mail").value;
    let hidePutMail = document.getElementById("recupMail");

    let recupVmail = document.getElementById("Vmail").value;
    let hidePutVmail = document.getElementById("recupVmail");

    hidePut.value = recupMess;
    hidePutMail.value = recupMail;
    hidePutVmail.value = recupVmail;
}