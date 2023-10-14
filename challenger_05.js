// Essa função tem como objetivo buscar um numero no Array com o forEach, caso tenha ele informa que está na lista se não ele informa que não está na lista

const numberList = (num) => {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  list.forEach((number) => {
    if (num == number) {
      console.log(
        `O número que você informou é: ${number}, ele existe na minha lista.`
      );
    }
  });
  console.log(`O número ${num} não está na minha lista`);
};

numberList(11);
