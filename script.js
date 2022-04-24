let elemento = document.querySelector('h3');

// hasAttribue - pergunta se existe um determinado atributo
if(elemento.hasAttribute('id')){
  console.log("SIM");
}

// getAttribute - Busca o valor do atributo
console.log(elemento.getAttribute('id'));

// setAttribute - define um atributo que o elemento não tem.
elemento.setAttribute('title', 'Título do sumário');

//removeAttribute - remove um atributo de um elemento específico.
let imagem = document.querySelector('img');
//imagem.removeAttribute('src');

// attributes - retorna uma coleção de todos os atributos registrados para um nó especificado.
console.log(imagem.attributes);