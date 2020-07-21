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
      // checagem da vitória
      checkWinCondidtion();
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

// verifica quem ganhou
function checkWinCondidtion() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // vitória na horizontal
  // primeira linha
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b1Child == "O" && b3Child == "O" && b3Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }
  // segunda linha
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b4Child == "O" && b5Child == "O" && b6Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }
  // terceira linha
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b7Child == "O" && b8Child == "O" && b9Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }

  // vitória na vertical

  // primeira coluna
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b1Child == "O" && b4Child == "O" && b7Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }

  // segunda coluna
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b2Child == "O" && b5Child == "O" && b8Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }

  // terceira coluna
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b3Child == "O" && b6Child == "O" && b9Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }

  // vitória diagonal

  // primeira diagonal
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b1Child == "O" && b5Child == "O" && b9Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }

  // segunda diagonal
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      // X ganhou
      console.log("O jogador X ganhou.");
    } else if (b3Child == "O" && b5Child == "O" && b7Child == "O") {
      // O ganhou
      console.log("O jogador O ganhou.");
    }
  }

  // declara "velha"
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    // se todos os boxes tiverem marcados
    console.log("Deu velha.");
  }
}
