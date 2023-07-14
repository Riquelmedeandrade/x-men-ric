//OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

// Variável para armazenar o personagem atualmente selecionado
let personagemSelecionado = null;

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {

    if(window.innerWidth <450) {
      window.scro[{top: 0,behavior: 'smooth'}];
    }
    // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
    if (personagemSelecionado !== null) {
      personagemSelecionado.classList.remove('selecionado');
    }

    personagem.classList.add('selecionado');
    personagemSelecionado = personagem;

    // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
    const nomePersonagem = document.getElementById('nome-personagem')
   nomePersonagem.innerText = personagem.getAttribute('data-name');

   const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
  

    
  });
});