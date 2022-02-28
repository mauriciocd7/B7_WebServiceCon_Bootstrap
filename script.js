(async function () {
    document.querySelector(".filmes").innerHTML = "carregando...";
    let req = await fetch("https://api.b7web.com.br/cinema/"); //requisição do endereço.
    let json = await req.json();
    console.log(json);
    montarBlog(json);
 
  function montarBlog(lista) {
    let html = "";

    for (let i in lista) { //for para alimentar divs.
      html +=
        `<div class="col-md-4  bg-light p-3"><div class="filme"><img class="img-thumbnail"src="${lista[i].avatar}"/><h5 class="mb-3 text-warning text-center">${lista[i].titulo}</h5></div></div>`;
    }
    document.querySelector(".filmes").innerHTML = html;
  }
})();