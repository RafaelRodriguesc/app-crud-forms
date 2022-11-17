import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlProduto: string = 'http://localhost:3000/produtos'

  constructor(
    private _http: HttpClient

  ) { }

  postItem(params: any): Observable<any> {
    return this._http.post<any>(this.urlProduto, params)

  }

  getAllProdutos(): Observable<any> {
    this._http.get(this.urlProduto).subscribe(data => {
      console.log(data)
    })
    return this._http.get(this.urlProduto)

  }

  deleteitem(params:any): Observable<any>{
    const tabela = params.tabela
    const id = params.id
    return this._http.delete<any>(this.urlProduto+'/'+id)
  }

}
