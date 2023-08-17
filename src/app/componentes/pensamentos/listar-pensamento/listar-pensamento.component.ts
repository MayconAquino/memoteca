import { Component, OnInit } from '@angular/core';
import { PensamentoInt } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos: PensamentoInt[] = [];

  constructor(private service: PensamentoService) {}

    ngOnInit(): void {
      this.service.listar().subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
      })

    }

}
