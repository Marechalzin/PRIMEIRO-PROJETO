if(localStorage.getItem('token') == null) {
    alert('você precisa estár logado para acessar essa página')
    window.location.href = "./IMG/sigin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"))

let logado = document.queryselector("#logado")
logado.innerHTML = `Olá ${userlogado.nome}`

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userlogado");
    window.location.href = "./IMG/sigin.html";
}
