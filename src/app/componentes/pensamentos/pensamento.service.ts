import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PensamentoInt } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/pensamentos'

  listar(): Observable<PensamentoInt[]> {
    return this.http.get<PensamentoInt[]>(this.API)
}

  criar(pensamento: PensamentoInt) {
    return this.http.post<PensamentoInt>(this.API, pensamento)
  }

  editar(pensamento: PensamentoInt): Observable<PensamentoInt> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<PensamentoInt>(url, pensamento)

  }

  excluir(id: number): Observable<PensamentoInt> {
    const url = `${this.API}/${id}`
    return this.http.delete<PensamentoInt>(url)
  }

  buscarPorId(id: number): Observable<PensamentoInt> {
    const url = `${this.API}/${id}`
    return this.http.get<PensamentoInt>(url)
  }

}
