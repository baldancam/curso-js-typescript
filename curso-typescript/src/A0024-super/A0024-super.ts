export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  getCpf(): string {
    return this.cpf;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');

    const result = super.getNomeCompleto();

    return result + ' Hey soul sister';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Matheus', 'Baldança', 29, '000.454.875-85');
const aluno = new Aluno('Matheus', 'Baldança', 29, '000.454.875-85', '008');
const cliente = new Cliente('Matheus', 'Baldança', 29, '000.454.875-85');

console.log(pessoa.getCpf());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

console.log(aluno);
