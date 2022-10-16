/*

OBJETIVO: quando clicarmos na aba , temos que mostrar o conteúdo da aba que foi cliada pelo usuário e esconder o conteúdo da aba anterior

*/ 

// passo 1 - pegar os elementos que representam as abas no HTML
const abas = (document.querySelectorAll(".aba"));

// passo 2 - identificar o clique no elemento aba 
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba);
       
       exibirInformacoesDaAba(aba);

    });
    
});


function selecionarAba(aba) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");

};

function exibirInformacoesDaAba(aba) {
    // passo 5 - esconder o conteúdo anterior
    const informationSelecionada = document.querySelector(".information.selecionado");
    informationSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${(aba.id)}` 

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}