//Fazer um mapeamento do que fazer antes de codar, aplicando uma boa logica!
//-passo 1- dar um jeito de pegar o elemento html nos botoes
const botoesCarrossel=document.querySelectorAll('.botao');
const imagens= document.querySelectorAll('.imagem');

//-passo 2 - dar um jeito de indentificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', ()=>{
        
        //-passo 3 - desmarcar o botao selecionado anterior
        desativarBotaoSelecionado();

        //-passo 4- marcar botao clicado como se esrivesse selecionada
        selecionarBotaoCarrossel(botao);

        //-passo 5- esconder a imagem ativa de fundo 
        esconderImagemAtiva();

        //-passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
