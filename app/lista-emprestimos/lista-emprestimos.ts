import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EmprestimoService } from '../Services/emprestimo-service';
import { Emprestimo, StatusEmprestimo } from '../tipos/emprestimo';

@Component({
  selector: 'app-lista-emprestimos',
  imports: [DatePipe],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimos {
  emprestimos: Emprestimo[]; // a lista vinda do service

  constructor(private emprestimoService: EmprestimoService) {
    this.emprestimos = this.emprestimoService.listar();
  }

  // contadores
  get total(): number {  // total
    return this.emprestimos.length;
  }
  get emAberto(): number {     // em aberto
    return this.emprestimos.filter(e => !e.devolvido).length;
  }
  get devolvidos(): number {  // devolvidos
    return this.emprestimos.filter(e => e.devolvido).length;
  }

  status(emprestimo: Emprestimo): StatusEmprestimo {
    return emprestimo.devolvido ? 'Devolvido' : 'Em aberto';
  }

  remover(id: number) {
    this.emprestimoService.remover(id);
  }

  registrarDevolucao(id: number) {
    this.emprestimoService.registrarDevolucao(id);
  }
}
