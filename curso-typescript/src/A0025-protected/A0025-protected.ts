// cria uma classe que pode ser usada de fora
export class Empresa {
  // é uma classe publica e apenas de leitura, ou seja, não pode ser alterada
  public readonly nome: string; // public não necessário
  // por ser uma classe privada, preferivel já passar o atributo sem a necessidade de um metodo construtor
  protected readonly colaboradores: Colaborador[] = [];

  private readonly cnpj: string;

  // metodo construtor é usado para alocar e garantir um local na memoria para a classe em questão
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  // metodo criado para adicionar valores ao array da classe
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', ' 23.305.648/0001-30');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

// Classe criada para  criar metodo construtor e conseguir alocalos no array
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

// variavel criada para dar o valor utilizando a classes
const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Matheus', 'Badança');
const colaborador2 = new Colaborador('Juca', 'Santos');
const colaborador3 = new Colaborador('Marcos', 'Costa');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log('############');

console.log(empresa1);
empresa1.mostrarColaboradores();

console.log('############');

console.log(empresa1);

console.log('############');

const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
