const percentage = (nominator, denominator) => {
  let result = nominator / denominator;

  console.log(`${nominator} equivale a ${result * 100}% de ${denominator}. `);
};

percentage(2, 100);
