document.addEventListener("DOMContentLoaded", function () {
  const phraseButtons = document.querySelectorAll(".phrase button");
  const selectedWordsArea = document.querySelector(".selected-words");

  // Embaralha os botões
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const buttonsArray = Array.from(phraseButtons);
  shuffle(buttonsArray);

  const phraseContainer = document.querySelector(".phrase");
  phraseContainer.innerHTML = ""; // Limpa os botões originais
  buttonsArray.forEach((btn) => phraseContainer.appendChild(btn)); // Adiciona os botões embaralhados

  // Event listener para os botões
  buttonsArray.forEach((btn) => {
    btn.addEventListener("click", function () {
      const word = this.getAttribute("data-word");

      // Se o botão já estiver ativo, remove
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        const wordToRemove = selectedWordsArea.querySelector(
          `button[data-word="${word}"]`
        );
        if (wordToRemove) {
          wordToRemove.remove();
        }
      } else {
        // Se não estiver ativo, adiciona
        this.classList.add("active");
        const newWordButton = document.createElement("button");
        newWordButton.textContent = word;
        newWordButton.setAttribute("data-word", word);
        selectedWordsArea.appendChild(newWordButton);
      }
    });
  });
});
// ... código anterior ...

document.getElementById("check").addEventListener("click", function () {
  const selectedWords = document.querySelectorAll(".selected-words button");
  const correctOrder = [
    "I",
    "went",
    "to",
    "the",
    "picnic",
    "with",
    "my",
    "friend,",
    "it",
    "was",
    "amazing.",
  ];
  let userOrder = [];

  selectedWords.forEach((word) =>
    userOrder.push(word.getAttribute("data-word"))
  );

  if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
    document.getElementById("feedback").textContent =
      "Parabéns! A frase está correta!";
  } else {
    document.getElementById("feedback").textContent =
      "A frase está incorreta. Tente novamente!";
  }
});

// ... restante do código ...
