// trocando o tema 
function trcTema() {
    const html = document.documentElement
    html.classList.toggle('claro')

    // pegar a tag img
    const image = document.querySelector("profile-img")

    // substituir a imagem
    if(html.classList.contains('claro')) {
        // se tiver claro mode, adiconar a imagem claro
        img.setAttribute('src', '/assets/avatar-light.png')
    } else {
        // se tiver sem o claro mode, mater a imagem normal
        img.setAttribute('src', '/assets/Avatar.png')
    }
}