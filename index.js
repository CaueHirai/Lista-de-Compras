import { criarItemDaLista } from "./CriarItemDaLista.js";
import verificarListaVazia from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); // Evita perder tudo ao atualizar a página

    const itemDaLista = criarItemDaLista();  
    listaDeCompras.appendChild(itemDaLista); // Adiciona item criado para lista de compras
    verificarListaVazia(listaDeCompras);
    inputItem.value = "";
})