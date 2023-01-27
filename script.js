const Btn = document.getElementById("Btn")
const playground = document.getElementById("playground")
const win = document.getElementById("win")
const loss = document.getElementById("loss")
const Text = document.getElementById("Text");
const gessedNum = document.getElementById("gessedNum");
let count = 3;

Btn.addEventListener("click", displayDate);
let x = Math.floor((Math.random() * 9) + 1);
function tryAgain() {

    playground.style.display = "block"
    win.style.display = "none"
    loss.style.display = "none"

    Text.innerText = " Between 1 to 9 you have only 3 attempt";
    
}

gessedNum.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("Btn").click();
      gessedNum.value="";
    }
  });

function play() {
    var audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}
function winplay() {
    var audio = new Audio(
        "https://assets.codepen.io/1256430/whistle.mp3");
    audio.play();
}


function displayDate() {
    const gessedNum = document.getElementById("gessedNum").value;
    console.log(x)

    if (gessedNum == x) {
        playground.style.display = "none"
        win.style.display = "block"
        winplay();
        //   gessedNum.value=" ";


    }

    else if (gessedNum < x) {
        Text.innerText = "thoda sa jada ";
        play();
        count--;
        // console.log("dec is "+count);

    }
    else if (gessedNum > x) {
        Text.innerText = "thoda sa kam chance";
        play();
        count--;
        // console.log("dec is "+count);
        // gessedNum.value=" ";
    }
    if (count == 0) {
        playground.style.display = "none"
        loss.style.display = "block"

    }
    gessedNum.value = "";


}


