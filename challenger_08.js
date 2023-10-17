// Criando um contador básico para treinar, é importante dizer que temos que criar a variável com let e fora da função, pois
// o valor do contadaor será atualizado

let contador = 1;

function atualizarContador() {
  console.log(contador);
  contador++;

  if (contador === 11) {
    clearInterval(intervalo);
  }
}

const intervalo = setInterval(atualizarContador, 1000);

atualizarContador();
