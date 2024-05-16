function updateColor(){
	var newSheet = document.getElementById("pageColor").value;
	document.getElementById('colors').setAttribute('href',newSheet);


	localStorage.setItem("color", newSheet);
}

function updateColorWithCookieCheck()
{
	var cookieColor = localStorage.getItem("color");
	if (cookieColor != null){
		document.getElementById("pageColor").value = cookieColor;
	}
	updateColor();
}

window.onload = () => {updateColorWithCookieCheck();};
