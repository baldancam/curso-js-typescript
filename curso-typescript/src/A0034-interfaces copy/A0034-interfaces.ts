interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa2 = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa3 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa3 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa3 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Carlos',
  sobrenome: 'Souza',
};

const pessoa = new Pessoa('Matheus', 'Baldança');

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
