export const inputItem = document.getElementById("input-item");

export function criarItemDaLista(){
    if (inputItem.value == ""){
        alert("Escreve alguma coisa pra submeter né ô cabeção");
        return;
    }

    const itemDaLista = document.createElement("li");
    
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    return itemDaLista;
}