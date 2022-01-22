let texto = document.getElementById("textoH2")

function mudarTexto() {
    texto.innerHTML = document.getElementById("texto").value
    texto.style.textAlign = "justify"
}

function maiusculo() {
    texto.innerHTML = document.getElementById("texto").value.toUpperCase()
    if (texto.classList) {
        texto.classList.remove("capitalizado")
    }
}

function minusculo() {
    texto.innerHTML = document.getElementById("texto").value.toLowerCase()
    if (texto.classList) {
        texto.classList.remove("capitalizado")
    }
}

function capitalizado() {
    if (texto.classList) {
        texto.classList.add("capitalizado")
    }
}

function negrito() {
    texto.innerHTML = document.getElementById("texto").value
    texto.style.fontWeight = "Bold"
   
}

function minusculo() {
    texto.innerHTML = document.getElementById("texto").value.toLowerCase()
    if (texto.classList) {
        texto.classList.remove("capitalizado")
    }
}

function italico() {
    texto.innerHTML = document.getElementById("texto").value
    texto.style.fontStyle = "italic"
}

function original() {
    texto.innerHTML = document.getElementById("texto").value
    texto.style.fontStyle = "normal"
    texto.style.fontWeight = "normal"
}
