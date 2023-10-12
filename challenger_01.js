// O desafio consiste em contar quantas vezes uma letra é usada na texto.
// Precisamos passar uma letra e um texto como argumento.

const countLetter = (letter, text) => {
  var count = 0;

  for (var i in text) {
    if (letter == text[i]) {
      count++;
    }
  }

  if (count === 0) {
    console.log(`A letra '${letter}' não aparece nenhuma vez em '${text}'.`);
    return;
  }

  console.log(
    `A letra '${letter}' aparece ${count} ` +
      (count === 1 ? "vez" : "vezes") +
      ` em '${text}'.`
  );
};

countLetter("p", "paralelepipedo");
