let w = window.innerWidth;
let h = window.innerHeight;
    let body = document.getElementById('body');

for (let index = 0; index < 20; index++) {
    let flocon = document.createElement('div');
    flocon.classList.add('neige');
    taille(flocon);
    posNeige(flocon);
    vitesse(flocon);
    body.appendChild(flocon);
}

/******** choix taille aléatoire *******/
function taille(lui) {
    let laTaille = Math.floor(Math.random() * Math.floor(3));
    if (laTaille == 0) {
        lui.classList.add('petit');
    }
    else if (laTaille == 1) {
        lui.classList.add('moyen');
    }
    else if (laTaille == 2) {
        lui.classList.add('grand');
    }
}

function posNeige(lui) {
    let laTaille = Math.floor(Math.random() * Math.floor(200));
    lui.style.left = laTaille+"vh";
}

function vitesse(lui) {
    let laTaille = Math.floor(Math.random() * Math.floor(5));
    if (laTaille == 0) {
        lui.classList.add('neigeMoyenne');
    }
    else if (laTaille == 1) {
        lui.classList.add('neigeRapide');
    }
    else if (laTaille == 2) {
        lui.classList.add('neigeLente');
    }
    else if (laTaille == 3) {
        lui.classList.add('neigeTresLente');
    }
    else if (laTaille == 4) {
        lui.classList.add('neigeTresLente');
    }
}

let emplacementFlocon = 0;
let ceFlocon = document.getElementsByClassName('neige');

setInterval(function(){
    for (let index = 0; index < ceFlocon.length; index++) {
        const element = ceFlocon[index];
        emplacementFlocon = element.offsetTop;
        if (emplacementFlocon > h) {
            element.remove();
            let flocon = document.createElement('div');
            flocon.classList.add('neige');
            taille(flocon);
            posNeige(flocon);
            vitesse(flocon);
            body.appendChild(flocon);
        }
    }
    
}, 100);

/************** animation sapin ****************/

let sapin = document.getElementById('sapin');

function secou() {
    sapin.classList.add("secouage");
    setTimeout(() => {
        sapin.classList.remove("secouage");
    }, 300);
}