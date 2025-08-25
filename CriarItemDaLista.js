export const inputItem = document.getElementById("input-item");
import verificarListaVazia from "./verificarListaVazia.js";
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

export function criarItemDaLista(){
    if (inputItem.value == ""){
        alert("Escreve alguma coisa pra submeter né ô cabeção");
        return; 
    }
    let contador = 1;

    const itemDaLista = document.createElement("li");
    
    const containerItemDaLista = document.createElement("div"); 
    containerItemDaLista.classList.add("lista-item-container");

    const nomeItem = document.createElement("p");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    containerItemDaLista.appendChild(inputCheckBox)

    inputCheckBox.addEventListener("click", function(){
        if(inputCheckBox.checked){
            nomeItem.style.textDecoration = "line-through";
        }else{
            nomeItem.style.textDecoration = "none";
        }
    });

    nomeItem.innerText = inputItem.value;

    const botao = document.createElement("button");
    botao.classList.add("botao-excluir");

    const iconeExcluir = document.createElement("i")
    iconeExcluir.className = "bi bi-trase";

    botao.style.cursor = "pointer"
    containerItemDaLista.appendChild(botao);
    botao.appendChild(iconeExcluir);

    botao.addEventListener("click", function (){
        const confirmacao = confirm("Deseja mesmo apagar isso daí?")

        if(confirmacao){
            itemDaLista.remove();
            alert("Item deletado")
            verificarListaVazia(listaDeCompras)
        }
    })

    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();

    inputItem.value = "";

    return itemDaLista;
}