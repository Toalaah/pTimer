function update_title() {
	var a = +document.getElementById('num_tasks').innerText;
	var b = document.getElementById('timer-show').innerText;
	if(b === "") {
		if(a !== 0) {
			document.title = "Dashboard | " + a + " tasks";
		}
		if(a === 0){
			document.title = "Dashboard";
		}
	}
	if(b !== "") {
		document.title = b;
	}
	if(b === "0:00") {
		if(a !== 0) {
			document.title = "Dashboard | " + a + " tasks";
		}
		if(a === 0){
			document.title = "Dashboard";
		}
	}
}