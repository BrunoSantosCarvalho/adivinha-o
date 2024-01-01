let nomeDoJogador = prompt('Olá, qual é o seu nome?');
let escolhaDoUsuario = prompt('Escolha um número entre 1 e 10');
let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // sorteia um número inteiro entre 1 e 10

if (escolhaDoUsuario == numeroAleatorio) {

    alert('Parabéns você acertou. O número secreto era ' + numeroAleatorio);


}

else {

    alert('Você errou. Tente novamente. o número secreto era ' + numeroAleatorio);
}

  let horas = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', hour12: false});
  if ( horas>= 0 && horas <= 5) { // entre meia noite (0h) e 5 da madrugada
    alert('Boa madrugada, ' + nomeDoJogador);
  } else if (horas >= 6 && horas < 12) { // entre 6 e 11 da manhã
    alert('Bom dia, ' + nomeDoJogador);
  } else if (horas >= 12 && horas < 18) { // entre meio dia (12h) e 17 (5h) da tarde
    alert('Boa tarde, ' + nomeDoJogador);
  } else if (horas >= 18 && horas <= 23) { // entre 18 (6h) e 23 (11h) da noite
    alert('Boa noite, ' + nomeDoJogador);
  }

  
  location.reload();
  