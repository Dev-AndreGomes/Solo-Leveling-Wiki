const cards = document.querySelectorAll('.card');

const personagens = document.querySelectorAll('.personagem')

cards.forEach((card, indice) => {
    card.addEventListener("click",() =>{
        desselecionarBotao();
        
        card.classList.add("selecionado");

        desselecionarPersonagem();

        personagens[indice].classList.add('selecionado')
    });    
});

function desselecionarPersonagem(){
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao(){
    const botaoSelecionado = document.querySelector(".card.selecionado");
    botaoSelecionado.classList.remove('selecionado')
}
