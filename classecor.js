
const btnTrocacor = document.getElementById("trocacor");
let caixaTexto = document.getElementById('caixa');

// acao de clique para trocar a cor
btnTrocacor.addEventListener("click", () => {
    let caixaTexto = document.getElementById('caixa');

    if ( caixaTexto.className === "verde"){
        caixaTexto.classList.add('amarelo');
        caixaTexto.classList.remove("verde");
    }else{
        caixaTexto.classList.add('verde');
        caixaTexto.classList.remove('amarelo');
    }

    console.log(caixaTexto.className);
});

const btnTrocaTexto = document.getElementById("trocatexto");
btnTrocaTexto.addEventListener("click", () => { 
    if(caixaTexto.innerHTML === 'Banana'){
        document.getElementById("caixa").innerHTML ="Limão";
    }else{
        document.getElementById("caixa").innerHTML = "Banana";
    }
});