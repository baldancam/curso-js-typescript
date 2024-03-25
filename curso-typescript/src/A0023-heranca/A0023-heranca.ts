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
  getNomeCompleto(): string {
    return 'Isso vem do Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Matheus', 'Baldança', 29, '000.454.875-85');
const aluno = new Aluno('Matheus', 'Baldança', 29, '000.454.875-85');
const cliente = new Cliente('Matheus', 'Baldança', 29, '000.454.875-85');

console.log(pessoa.getCpf());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
