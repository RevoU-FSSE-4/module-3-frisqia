var introductionText = document.getElementById("introductionText");
introductionText.innerHTML = "hello guys"; // untuk merubah textnya
introductionText.textContent = "hello"; //bisa juga menggunakan textcontent
var image = document.querySelector("#meong"); //bisa menggunakan id
//introductionText.style.color = "red"; // mengganti warna/ styiling
var image = document.querySelector();
//mengganti gambar
console.log(image);
image.src =
  "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg";

var buttonColor = document.querySelector("button");
buttonColor.onclick = setColorToRed;
var inputText = document.querySelectorAll("input")[0];

function setColorToRed() {
  introductionText.style.color = "red";
}
function setLOwerCase() {}
