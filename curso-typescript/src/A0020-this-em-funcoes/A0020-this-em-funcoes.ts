// this dentro do argumento não é argumento, é apenas tipagem.
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Matheus', 30);
funcao.apply(new Date(), ['Matheus', 30]);
