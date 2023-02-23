var time = 0;
var start = false;
var check = true;
var c;
var score = 0;
var point;

function startClicked() {
    if (check) {
        nextChar();
        check = false;
    }
    start = !start;
    if (!start) {
        time = 00;
        document.getElementById("start").innerHTML = "start";
    } else {
        document.getElementById("start").innerHTML = "reset";
    }
}
setInterval(function () {
    if (start)
        time = time + 1;
    point = Math.floor(time / 100) + ":" + time % 100
        document.getElementById("time").innerHTML = point;
}, 10);

function nextChar() {
    var index = Math.floor(Math.random() * 26);
    var list = 'abcdefghijklmnopqrstuvwxyz'
    c = list[index]
    document.getElementById("letter").innerHTML = c;
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var random = document.getElementById('letter');
    if (start) {
        if (random.innerHTML == name) {
            score = score + 1
            if (score == 10) {
                start = false;
                alert(point);
            }

            nextChar();
            random.style.color = "black";
        } else {
            random.style.color = "red";
        }
    }
}, false);