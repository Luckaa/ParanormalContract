
const scanButton = document.getElementById('scan');

document.getElementById('load').addEventListener('click', () => {
  alert('Função de carregar partida ainda não implementada');
});

document.querySelector('.fab').addEventListener('click', () => {
  alert('Botão flutuante clicado!');
});

async function handleQrResult(valor) {

  const resposta = await fetch("/api/qr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      codigo: valor
    })
  });

  const data = await resposta.json();

  console.log(data)
  alert("Resposta do servidor: " + data.codigo);
}
