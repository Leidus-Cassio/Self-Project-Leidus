function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('Light')
    
    
    const img = document.querySelector("#profile img")
   
     if(html.classList.contains('Light')) {
       img.setAttribute("src", "assets/profile-dark.png")
       img.setAttribute("alt", "Foto de Leidus fundo escuro")
       
    } else {
       img.setAttribute("src", "assets/profile-light.png")
       img.setAttribute("alt", "Foto de Leidus fundo claro")
    }
}