export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('oi');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Matheus', 'Baldança', 29, '000.111.222.33');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Lidia');

console.log(pessoa);

pessoa.cpf = '222.333.444-55';

console.log(pessoa.cpf);

Pessoa.falaOi();

console.log(pessoa);

console.log(pessoa2);
