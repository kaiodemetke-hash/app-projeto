let frases=["Nós somos mais fantasmas do que pessoas.",
"A vingança é um jogo para idiotas.",
"Algumas árvores florescem, outras morrem. Nada é justo."];

function geradorMensagem(){
let indiceGerado= Math.floor(Math.random()*(frases.length));
let fraseGerada= frases[indiceGerado];
document.querySelector("#saída").textContent=fraseGerada;




}