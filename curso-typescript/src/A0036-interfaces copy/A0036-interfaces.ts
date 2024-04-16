// Declaration Merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: /*readonly*/ string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'Baldança',
  enderecos: ['AV. Brasil'],
  idade: 29,
};

pessoa.enderecos.push('Rua Nova');

console.log(pessoa);
