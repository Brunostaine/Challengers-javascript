// A lista filtra users que tenham crédito maior que 500

const filterUsers = () => {
  const usersList = [
    { name: "José", credit: 500 },
    { name: "Tomé", credit: 700 },
    { name: "Simão", credit: 200 },
    { name: "Maria", credit: 100 },
    { name: "João", credit: 1000 },
  ];

  const filterList = usersList.filter(
    (user, index, array) => user.credit > 500
  );

  console.log(filterList);
};

filterUsers();
