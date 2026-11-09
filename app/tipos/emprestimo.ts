export interface Emprestimo {
  id: number;
  nomePessoa: string;
  tituloLivro: string;
  dataPrevistaDevolucao: string;
  devolvido: boolean;
}

// type para os dados do formulário (ainda sem id e sem status)
export type DadosEmprestimo = {
  nomePessoa: string;
  tituloLivro: string;
  dataPrevistaDevolucao: string;
};

// union type: só aceita esses dois textos
export type StatusEmprestimo = 'Em aberto' | 'Devolvido';
