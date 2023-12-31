import { Component, OnInit } from '@angular/core';
import { PensamentoInt } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{

    formulario!: FormGroup;


    constructor(
      private service: PensamentoService,
      private router: Router,
      private formBilder: FormBuilder
      ) {}

    ngOnInit(): void {
        this.formulario = this.formBilder.group({
          conteudo: ['', [Validators.required]],
          autoria: ['', [Validators.required]],
          modelo:['modelo1']
        })
    }

    criarPensamento() {
      console.log(this.formulario)
      if(this.formulario.valid) {
        this.service.criar(this.formulario.value).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
        })
      }
    }

    cancelar() {
      this.router.navigate(['/listarPensamento'])
    }
}
