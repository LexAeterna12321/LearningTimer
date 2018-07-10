const timer = document.querySelector(".timer");

(function timerF(){
    setTimeout(() => {
        const learningStart = new Date(2017, 11, 20);
        const now = new Date();
        const time = new Date(Math.abs(now.getTime() - learningStart.getTime()));
        const diff = `${time.getFullYear() - 1970} years ${time.getMonth()} months ${time.getDate()} days ${time.getHours()} hours ${time.getMinutes()} minutes ${time.getSeconds()} seconds `;

        timer.innerHTML = diff;
        timerF();
},1000)
})();

