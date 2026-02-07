const home_increment_1 = document.getElementById("home_increment_1");
const home_increment_2 = document.getElementById("home_increment_2");
const home_increment_3 = document.getElementById("home_increment_3");
const guest_increment_1 = document.getElementById("guest_increment_1");
const guest_increment_2 = document.getElementById("guest_increment_2");
const guest_increment_3 = document.getElementById("guest_increment_3");
const homeScoreEl = document.getElementById("homeScore"); 
const guestScoreEl = document.getElementById("guestScore");
const leadingTeamEL = document.getElementById("leader");
const newGame = document.getElementById("newGame");
const timerEl = document.getElementById("timer");

let homeScore = 0;
let guestScore = 0;

home_increment_1.addEventListener("click", () => {
    incrementHomeScore(1); 
    leader()
});
home_increment_2.addEventListener("click", () => {
    incrementHomeScore(2); 
    leader()
});
home_increment_3.addEventListener("click", () => {
    incrementHomeScore(3); 
    leader()
});

guest_increment_1.addEventListener("click", () => {
    incrementGuestScore(1)
    leader()
});
guest_increment_2.addEventListener("click", () => {
    incrementGuestScore(2)
    leader()
});
guest_increment_3.addEventListener("click", () => {
    incrementGuestScore(3)
    leader()
});

newGame.addEventListener("click", () => { 
    homeScore = 0; 
    guestScore = 0; 
    homeScoreEl.textContent = "0";
    guestScoreEl.textContent = "0";
    leadingTeamEL.textContent = "";
    gameTimer.startTimer();
});

function incrementHomeScore(num){
    homeScore += num
    homeScoreEl.textContent = homeScore
}

function incrementGuestScore(num){
    guestScore += num
    guestScoreEl.textContent = guestScore
}

function leader(){
    if(homeScore > guestScore){
        leadingTeamEL.textContent = "Team A is leading!" 
    }
    else if(homeScore < guestScore){
        leadingTeamEL.textContent = "Team B is leading!" 
    }
    else{
        leadingTeamEL.textContent = "It's a draw!" 
    }
}

class Timer {
    constructor(timerElement, durationMinutes = 45) {
        this.timerEl = timerElement;
        this.duration = durationMinutes * 60 * 1000;
        this.endTime = null;
        this.interval = null;
    }

    startTimer() {
        this.endTime = Date.now() + this.duration;

        this.interval = setInterval(() => {
            const remaining = this.endTime - Date.now();

            if (remaining <= 0) {
                clearInterval(this.interval);
                this.timerEl.textContent = "00:00";
                return;
            }

            const totalSeconds = Math.floor(remaining / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            this.timerEl.textContent =
                String(minutes).padStart(2, "0") + ":" +
                String(seconds).padStart(2, "0");

        }, 1000);
    }
}

const gameTimer = new Timer(timerEl, 45);
gameTimer.startTimer();
