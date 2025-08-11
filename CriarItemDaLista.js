export const inputItem = document.getElementById("input-item");

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
    }   );

    nomeItem.innerText = inputItem.value;
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    return itemDaLista;
}