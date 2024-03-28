var introductionText = document.getElementById("introductionText");
//introductionText.innerHTML = "hello guys"; // untuk merubah textnya
introductionText.textContent = "hello"; //bisa juga menggunakan textcontent
//var image = document.querySelector("#meong"); //bisa menggunakan id
//introductionText.style.color = "red"; // mengganti warna/ styiling
var image = document.querySelectorAll("img");
//mengganti gambar
console.log(image);
image.src =
  "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png";

var buttonColor = document.querySelector("button");
buttonColor.onclick = setColorToRed;
var inputText = document.querySelectorAll("input")[0];

function setColorToRed() {
  introductionText.style.color = "red";
}
function setLOwerCase() {}
