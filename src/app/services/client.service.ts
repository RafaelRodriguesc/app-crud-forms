import { Clientes } from './../pages/models/clientes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  urlClient: string = 'http://localhost:3000/clientes'

  constructor(
    private _http: HttpClient
  ) { }

  getAllClients(): Observable<any> {
    this._http.get(this.urlClient).subscribe(data => {
      console.log(data)
    })
    return this._http.get(this.urlClient)

  }

  postItem(params: any): Observable<Clientes> {
    return this._http.post<Clientes>(this.urlClient, params)

  }

  deleteitem(params:any): Observable<any>{
    const tabela = params.tabela
    const id = params.id
    return this._http.delete<any>(this.urlClient+'/'+id)
  }

  getClient(id: number) : Observable<any> {
    console.log(this.urlClient+"/"+id)
    return this._http.get(this.urlClient+"/"+id)
  }

  putcliente (params: any) : Observable<any> {
    console.warn(params)
    return this._http.put(this.urlClient+'/'+params.id, params)
  }
}
