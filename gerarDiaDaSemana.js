function gerarDiaDaSemana(){
    const diaDaSemana = new Date().toLocaleDateString("pt-bt", {
        weekday : "long"
    })

    const hora = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric"
    })
    

    const data = new Date().toLocaleDateString("pt-br")
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

    return dataCompleta;
}

export default gerarDiaDaSemana