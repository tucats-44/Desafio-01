var setaesquerda = window.document.getElementById("setaesquerda")
var Arthurfrancisco = window.document.getElementById("Arthurfrancisco")
var isaacJR = window.document.getElementById("isaacJR")
var JoaoVictor = window.document.getElementById("JoaoVictor")
var setadireita = window.document.getElementById("setadireita")

function RolarParaDireita() {
    Arthurfrancisco.style = "display:none"
    isaacJR.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    isaacJR.style = "display:none"
    Arthurfrancisco.style = "display:flex"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}