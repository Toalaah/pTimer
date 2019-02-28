function pomodoroTimer(a) {
	document.querySelector("link[rel*='icon']").href = "favicon1-32x32.png";
    var remainingTime = a;
    var newOne = 0
    var increment = 1;
    var initialTime = a;
    var counter = 0;
    var ding = new Audio('bell.mp3');
    var interval = setInterval(timeIt,1000);
    
    document.getElementById("timer-show").innerHTML="";
    
    function convertMins(b) {
        var minutes = Math.floor(b / 60);
        var seconds = b % 60;
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        
        return (minutes + ":" + seconds); 
    }
    
    function timerStop() {
        increment = 0;
        clearInterval(interval);
    }

    document.getElementById('study25').addEventListener('click', function() { timerStop(); return; }, false);
    document.getElementById('studyCustom').addEventListener('click', function() { timerStop(); return; }, false);
    document.getElementById('break10').addEventListener('click', function() { timerStop(); return; }, false);
    document.getElementById('break5').addEventListener('click', function() { timerStop(); return; }, false);
    document.getElementById('pause').addEventListener('click', function() { increment=0; }, false);
    document.getElementById('resume').addEventListener('click', function() { increment=1; }, false);
    document.getElementById('reset').addEventListener('click', function() { timerStop(); pomodoroTimer(initialTime); }, false);
    document.getElementById("timer-show").innerHTML = convertMins(remainingTime);
    

    function timeIt() {
        counter = counter+increment;
        document.getElementById("timer-show").innerHTML = (convertMins(remainingTime - counter));
        update_title();
        if(counter == remainingTime) {
            timerStop();
            ding.play();
            document.querySelector("link[rel*='icon']").href = "favicon-32x32.png";
        }
    }
}