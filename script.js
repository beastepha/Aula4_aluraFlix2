function adicionarFilme() {
  let filme = document.getElementById('filme').value
  let listaFilme = document.getElementById('listaFilmes')
  let linkFilme = document.getElementById('link').value
  
  
  listaFilme.innerHTML += ('<a target="_blank" href=' +       linkFilme + '><img src=' + filme +'></a>')
  //código abixo vai limpar o campo
  document.getElementById('filme').value = ''
  
 
  
}
