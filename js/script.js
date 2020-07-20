// definindo elementos essenciais para os jogos
let x = document.querySelector(".x");
let o = document.querySelector(".O");
let boxes = document.querySelectorAll(".box"); // grade do jogo
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer; // dependendo modo de jogo

// contator de jogadas (X e O)
let player1 = 0;
let player2 = 0;

// adicionando click event aos boxes
for (let i = 0; i < boxes.length; i++) {
  // clicando na caixa
  boxes[i].addEventListener("click", function () {
    // inicio do jogo
    let el = checkEl(player1, player2); // definindo o X ou O

    // verificando se há X ou O
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);
      // computando a jogada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
    }
  });
}

// verifica quem irá jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    // X
    el = x;
  } else {
    // O
    el = o;
  }
  return el;
}
