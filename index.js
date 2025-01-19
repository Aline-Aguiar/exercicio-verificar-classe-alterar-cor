const quadrado = document.getElementsByClassName("quadrado")[0];

quadrado.addEventListener("click", trocarCor);

function trocarCor(){
    if(quadrado.classList.contains("azul")){
        quadrado.classList.add("preto");
        quadrado.classList.remove("azul");
    }else{
        quadrado.classList.remove("preto");
        quadrado.classList.add("azul");
    }
}