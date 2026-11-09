import { Injectable } from '@angular/core';
import { Emprestimo, DadosEmprestimo } from '../tipos/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private emprestimos: Emprestimo[] = []; // lista de empréstimos
  private proximoId = 1;                   // próximo id

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  adicionar(dados: DadosEmprestimo): void {
    this.emprestimos.push({
      id: this.proximoId++,
      nomePessoa: dados.nomePessoa,
      tituloLivro: dados.tituloLivro,
      dataPrevistaDevolucao: dados.dataPrevistaDevolucao,
      devolvido: false
    });
  }

  remover(id: number): void {
    const indice = this.emprestimos.findIndex(e => e.id === id);
    if (indice !== -1) {
      this.emprestimos.splice(indice, 1); // splice mantém a mesma referência do array
    }
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.emprestimos.find(e => e.id === id);
    if (emprestimo && !emprestimo.devolvido) {
      emprestimo.devolvido = true;
    }
  }
}
