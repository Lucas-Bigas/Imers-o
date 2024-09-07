function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    //console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p>Ops! O campo precisar ser preenchido com um destino!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // if (campoPesquisa == "") {
    //     section.innerHTML = "<p>Ops! Ainda não temos esse pedacinho. Tente outro!</p>"
    //     return
    // }

    //Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        section.innerHTML = "<p>Ops! Ainda não temos esse pedacinho!</p>"
        return
    }
    section.innerHTML = resultados
}

