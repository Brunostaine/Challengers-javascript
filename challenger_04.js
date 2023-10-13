const calculateAverage = (name, note1, note2) => {
  let average = (note1 + note2) / 2;

  console.log(
    `A média do aluno ${name} foi ${average},`,
    average >= 5 ? "APROVADO." : "REPROVADO."
  );
};

calculateAverage("Bruno", 8, 9.2);
