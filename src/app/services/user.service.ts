import { Users } from './../pages/models/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser: string = 'http://localhost:3000/usuarios'

  constructor(
    private _http: HttpClient
  ) { }

  getALLUsers(): Observable<any> {
    this._http.get(this.urlUser).subscribe(data => {
      console.log(data)
    })
    return this._http.get(this.urlUser)
  }

  postItem(params: any): Observable<Users> {
    return this._http.post<Users>(this.urlUser, params)

  }
  deleteitem(params:any): Observable<any>{
    const tabela = params.tabela
    const id = params.id
    return this._http.delete<any>(this.urlUser+'/'+id)
  }

  getUser(id: number) : Observable<any> {
    return this._http.get(this.urlUser+"/"+id)
  }

  putcliente (params: any) : Observable<any> {
    console.warn(params)
    return this._http.put(this.urlUser+'/'+params.id, params)
  }


}

