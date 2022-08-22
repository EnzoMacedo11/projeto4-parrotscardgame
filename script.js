function escolherNumeroDeCartas(){
numeroDeCartas = prompt("Escolha um número de cartas entre 4 e 14 para começar o Parrot Card Game");
    while((numeroDeCartas < 4) || (numeroDeCartas > 14) || (numeroDeCartas % 2 != 0)){
    alert("Número Inválido!")
    numeroDeCartas = prompt("Escolha um número de cartas entre 4 e 14 para começar o Parrot Card Game");
    
}   
    return numeroDeCartas
}
escolherNumeroDeCartas();

let ListaVerso = [
    "./Img/bobrossparrot.gif",
    "./Img/explodyparrot.gif",
    "./Img/fiestaparrot.gif",
    "./Img/metalparrot.gif",
    "./Img/revertitparrot.gif",
    "./Img/tripletsparrot.gif",
    "./Img/unicornparrot.gif"
];

let Carta =''; 


function criarCartas(){
    for(let i = 0; i < numeroDeCartas;i++){
        Carta +=

        `<div onclick="virarCarta(this)" class="Card">
        <img class="CardExterno .Ligado" src="./Img/front 2.png"/>
        <img class="CardInterno .Desligado" src="./Img/tripletsparrot.gif"/>
        </div>`;
    }
    let element = document.querySelector(".JogoPrincipal");
    element.innerHTML = Carta;
}
criarCartas();


    function virarCarta(Virar){
        let element = Virar.querySelector(".CardExterno")
         element.classList.add("Desligado")
        let elemento =Virar.querySelector(".CardInterno")
        elemento.classList.add("Ligado")
    }

    function CompararCarta(){

    }


/*let element = document.querySelector(".Card .CardExterno");
    if (element !== 0) {
        element.classList.remove(".Ligado");
    }
	element.classList.add("Desligado");

    let elemento = document.querySelector(".Card .CardInterno");
    if (elemento !== null) {
        elemento.classList.remove(".Desligado");
    }
	elemento.classList.add("Ligado");
    
}*/
