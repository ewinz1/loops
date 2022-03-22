// js loop assignment by Edwin

// add event listeners
document.getElementById("happy-btn").addEventListener("click", happy);
document.getElementById("four-btn").addEventListener("click", four);
document.getElementById("odd-btn").addEventListener("click", odd);
document.getElementById("seriesone-btn").addEventListener("click", seriesone);
document.getElementById("seriestwo-btn").addEventListener("click", seriestwo);


function happy () {
    // log "I'm so happy!" 500 times
    let num = 1; 
    while (num <=500) {
    console.log("I'm so happy!");
    num++;
    }
}

function four () {
    // multiples of 4 from 12 to 800
    for (let num = 12; num <=800; num +=4) {
        console.log(num);
    }
}

function odd () {
    // odd numbers from 55 to 11
    for (let num = 55; num >=11; num-=2 ) {
        console.log(num);
    }
}

function seriesone () {
    // series sum 5 + 6 + 7 + 8 + … + 48 + 49 + 50
    let sum = 0;
    for (d = 5; d <= 50; d++) {
        sum = sum + d;
    }
    console.log(sum);
}

function seriestwo () {
    // series sum 10 + 20 + 30 + … + 90 + 100
    let sum = 0;
    for (d = 10; d <= 100; d += 10) {
        sum = sum + d;
    }
    console.log(sum);
}