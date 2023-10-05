ms();
function ms() {
            let stateObj = { id: "100" };
            window.history.replaceState(stateObj,
                        "/", "#Custom_New_Tab");
	document.title = "Custom New Tab"
    document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    search();
  }
});

	console.log(localStorage.getItem("acd"));
	
	if (localStorage.getItem("acd") == null) {
		document.getElementById("ppm").click();
		localStorage.setItem("acd", "t");
	}
        }

function search() {
        var i =  document.getElementById("frm").value;
    let sq = "https://www.google.com/search?q=" + i;
    window.open(sq);
}

function hmkc() {
  alert("After you are in the settings (by pressing 'ok' below) \n Click on the 'select your primary button' dropdown and change the thing!");
}

function uopen(url) {
	document.body.innerHTML = ("<center><a top='45vh' href='" + url + "' id='babaka'>Failed to exicute js? click here to continue.</a> or <a onclick='location.reload()' href=''>Click here to go back</a></center>");
	document.getElementById("babaka").click();
}

