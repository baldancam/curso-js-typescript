export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  /* // Metodo getters e setters antigo, não é mais utilizado
  setCpf(valor: string): void {
    this.cpf = valor;
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }*/

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Matheus', 'Baldança', 29, '000.111.222.33');
pessoa.cpf = '222.333.444-55';

console.log(pessoa.cpf);
