const displayElement = document.querySelector('.clock');
const startButton = document.querySelector('.start');
const endButton = document.querySelector('.end');
const resetButton = document.querySelector('.reset');


const stopwatch = new Stopwatch(displayElement);

function Stopwatch(displayElement) {

    this._startTime = null; 
    this._elapsedTime = 0;  
    this._running = false;  
    this._timerInterval = null;  

    this.start = function() {
        if (this._running) {
            alert("Stopwatch is already started.");
            return;
        }
        
        this._startTime = Date.now() - this._elapsedTime;  
        this._running = true;

        this._timerInterval = setInterval(() => {
            this._elapsedTime = Date.now() - this._startTime;

            const totalSeconds = Math.floor(this._elapsedTime / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            displayElement.querySelector(".minutes").textContent = String(minutes).padStart(2, '0');
            displayElement.querySelector(".seconds").textContent = String(seconds).padStart(2, '0');
        }, 1000);
    };

    this.end = function() {
        if (!this._running) {
            alert("Stopwatch hasn't started yet.");
            return;
        }
        
        clearInterval(this._timerInterval);
        this._running = false;
    };

    this.reset = function() {
        clearInterval(this._timerInterval);
        this._running = false;
        this._elapsedTime = 0;
        displayElement.querySelector(".minutes").textContent = "00";
        displayElement.querySelector(".seconds").textContent = "00";
    };
}
