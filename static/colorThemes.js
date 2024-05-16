function updateColor(){
var newSheet = document.getElementById("pageColor").value;
document.getElementById('colors').setAttribute('href',newSheet);
}

window.onload = updateColor();
