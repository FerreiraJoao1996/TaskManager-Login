let time = 2500;
let currentImgIndex = 0;
let imagens = document.querySelectorAll("#slider img")

let max = imagens.length;

function trocarImagem(){
imagens[currentImgIndex].classList.remove("selected")
currentImgIndex++

if(currentImgIndex>= max){
    currentImgIndex = 0
}
    imagens[currentImgIndex].classList.add("selected")
}

function iniciar(){
    setInterval(() => {
        trocarImagem()
      }, time); 
}

window.addEventListener("load", iniciar)