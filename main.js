let a = new Date().getFullYear();
let launchDate = new Date(a + 1, 1, 1).getTime();
console.log(launchDate);

let countdown = setInterval(function () {
    let now = new Date().getTime();

    let timeDifference = launchDate - now;

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    let millis = Math.floor(timeDifference % 1000); 


    document.getElementById("timer").innerHTML =
        days + " " + hours + " " + minutes + " " + seconds;
        // days + "d " + hours + "h " + minutes + ?"m " + seconds + "s";

    document.getElementById("timersec").innerHTML =
    millis;

    if (timeDifference < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Launched!";
    }
}, 10);