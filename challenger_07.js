// Estamos vendo a velocidade do carro no radar se for maior que a velociade permitida ele leva uma multa.

const Placa = () => {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
  let numbers = "0123456789";
  let lettersRandom = "";
  let numbersRandom = "";

  for (i = 0; i < 3; i++) {
    lettersRandom += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  for (i = 0; i < 4; i++) {
    numbersRandom += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  let placaRandom = `${lettersRandom}-${numbersRandom}`;

  return placaRandom;
};

const car = [
  (velocidade = 81),
  (marca = "BMW"),
  (modelo = "X6"),
  (placa = Placa()),
  (data = new Date().toLocaleDateString()),
  (hora = new Date().toLocaleTimeString()),
];

const speedOfCars = (car) => {
  const radarLimit = 80;
  const valueFine = 198.86;
  const data = car[5];

  if (car[0] > radarLimit) {
    console.log(
      `${car[1]} ${car[2]} | placa: ${car[3]} | Velocidade: ${car[0]} | Velocidade Permitida: ${radarLimit} | Data: ${car[4]} | Hora: ${car[5]} | Multa: ${valueFine} `
    );
  } else {
    console.log("Sem multa");
  }
};

speedOfCars(car);
