let parrafo = document.getElementById("texto")
let boton = document.getElementById("btn")

boton.addEventListener('click', function(){
    parrafo.classList.toggle("texto-color")
})