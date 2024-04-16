type Veiculo = {
  marca: string;
  ano: number;
};

// para espelhar um objeto basta usar o tipo que ele quer espelhar e os campos que ele quer espelhar
type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Focus',
};

console.log(carro);
