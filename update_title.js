function update_title() {
	var b = document.getElementById('timer-show').innerText;
	if(b !== "") {
		document.title = b;
	}
	if(b === "0:00") {
		
			document.title = "pTimer";
		}
	}
