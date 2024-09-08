function pesquisar(){

    const loading = document.getElementById('loading');
    loading.classList.remove('hidden');
  
    setTimeout(() => {
      loading.classList.add('hidden');
      // Aqui você mostraria os resultados da pesquisa
      console.log('Resultados da pesquisa');
    }, 2000);

    let section = document.getElementById("resultados-pesquisa")
    //console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-erro'>Ops! O campo precisar ser preenchido com um destino!</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    //Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let img = ""
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        img = dado.img
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <img src=${dado.img}
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>                  
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        section.innerHTML = "<p class='mensagem-erro'> Ops! Ainda não temos esse pedacinho!</p>"
        return
    }
    section.innerHTML = resultados
}
