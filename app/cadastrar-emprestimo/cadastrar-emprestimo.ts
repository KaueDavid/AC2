import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmprestimoService } from '../Services/emprestimo-service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {
  nomePessoa = ''; // nome da pessoa
  tituloLivro = ''; // título do livro
  dataPrevistaDevolucao = '';    // data prevista de devolução

  constructor(
    private emprestimoService: EmprestimoService, // o service
    private router: Router              // para trocar de rota
  ) {}

  salvar() {
    if (!this.nomePessoa.trim() || !this.tituloLivro.trim() || !this.dataPrevistaDevolucao) {
      return;
    }

    this.emprestimoService.adicionar({
      nomePessoa: this.nomePessoa.trim(),
      tituloLivro: this.tituloLivro.trim(),
      dataPrevistaDevolucao: this.dataPrevistaDevolucao
    });

    this.router.navigate(['/lista']);
  }
}
