//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();

  // Limpa resultado para reiniciar rodada
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${amigoSorteado}`;
  resultado.appendChild(li);

  // Reinicia o jogo: limpa a lista e o array para nova rodada
  amigos = [];
  atualizarLista();
}










 

 
