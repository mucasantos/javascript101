
//Criar dois elementos html - Input e Button
//Quando o usuario clicar, adicionar o nome digitado 
//na lista de amigos.


//Olhem pra casa! Silêncio!!!

/*
1. Pegar o meu elemento do HTML pelo ID!!!
2. Ouvir o click do botão
3. Escrever na tela

*/

let elemento = document.getElementById('amigos');
let botaoAdd = document.getElementById("addAmigo");

let listaAmigo = []

botaoAdd.addEventListener("click", ()=>{
//Adicionar amigo (texto digitado no INPUT) na lista
    listaAmigo.push(elemento.value)
    console.log(listaAmigo);
});


