import { Fornecedores } from './../pages/models/fornecedores';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  urlFornecedor: string = 'http://localhost:3000/fornecedores'

  constructor(
    private _http: HttpClient
  ) { }

  getAllFornecedores(): Observable<any> {
    this._http.get(this.urlFornecedor).subscribe(data => {
      console.log(data)
    })
    return this._http.get(this.urlFornecedor)

  }

  postItem(params: any): Observable<Fornecedores> {
    return this._http.post<Fornecedores>(this.urlFornecedor, params)

  }

  deleteitem(params:any): Observable<any>{
    const tabela = params.tabela
    const id = params.id
    return this._http.delete<any>(this.urlFornecedor+'/'+id)
  }

  getFornecedor(id: number) : Observable<any> {
    console.log(this.urlFornecedor+"/"+id)
    return this._http.get(this.urlFornecedor+"/"+id)
  }

  putfornecedor (params: any) : Observable<any> {
    console.warn(params)
    return this._http.put(this.urlFornecedor+'/'+params.id, params)
  }

}
