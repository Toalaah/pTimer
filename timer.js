function pomodoroTimer(a) {
    var update = document.getElementById("timer-show");
    var remainingTime = a;
    var increment = 1;
    var counter = 0;
    var ding = new Audio('bell.mp3');
    var interval = setInterval(timeIt, 1000);

    update.innerHTML = "";

    function convertMins(b) {
        var minutes = Math.floor(b / 60);
        var seconds = b % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return (minutes + ":" + seconds);
    }

    function timerStop() {
        increment = 0;
        clearInterval(interval);
    }

    document.getElementById('study25').addEventListener('click', function() {
        timerStop();
        return;
    }, false);
    document.getElementById('studyCustom').addEventListener('click', function() {
        timerStop();
        return;
    }, false);
    document.getElementById('break10').addEventListener('click', function() {
        timerStop();
        return;
    }, false);
    document.getElementById('break5').addEventListener('click', function() {
        timerStop();
        return;
    }, false);
    document.getElementById('pause').addEventListener('click', function() {
        increment = 0;
    }, false);
    document.getElementById('resume').addEventListener('click', function() {
        increment = 1;
    }, false);
    document.getElementById('reset').addEventListener('click', function() {
        timerStop();
        pomodoroTimer(initialTime);
    }, false);
    update.innerHTML = convertMins(remainingTime);


    function timeIt() {
        counter = counter + increment;
        update.innerHTML = (convertMins(remainingTime - counter));
        update_title();
        if (counter == remainingTime) {
            timerStop();
            ding.play();
        }
    }
}
