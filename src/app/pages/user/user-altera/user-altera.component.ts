import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users, dadosEndereco } from './../../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-altera',
  templateUrl: './user-altera.component.html',
  styleUrls: ['./user-altera.component.css']
})
export class UserAlteraComponent implements OnInit {

  cepNaoEcontrado: boolean = false
  idUsuario: number | null = 0
  formUsuario:Users

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {
    this.formUsuario = new Users
   }

  ngOnInit(): void {
    this.idUsuario = Number (this._activatedRoute.snapshot.paramMap.get('id'))
    console.log("id do cliente", this.idUsuario)
    this.buscausuarioId(this.idUsuario)
  }

  buscausuarioId(id:number) {
    this._userService.getUser(id).subscribe(data => {
      console.log("data do usuarios", data)
      this.formUsuario = data
    })
  }

  getDadosCep(event: any) {
    this._http.get("https://viacep.com.br/ws/"+this.formUsuario.endereco.cep+"/json/").subscribe( (dataCep: any) => {
      if(dataCep.erro){
        this.cepNaoEcontrado = true
        setTimeout(() => {
          this.cepNaoEcontrado = false
          this.formUsuario.endereco.cep = ''
        }, 2000)
        return
        }
      this.formUsuario.endereco.logradouro = dataCep ['logradouro']
      this.formUsuario.endereco.bairro = dataCep ['bairro']
      this.formUsuario.endereco.cidade = dataCep ['localidade']
      this.formUsuario.endereco.estado = dataCep ['uf']
    })
  }

  goAltera() {
    console.log("this.formUsuario", this.formUsuario)
    this._userService.putcliente(this.formUsuario).subscribe(data =>{
      console.log('data retorno', data)
      this._router.navigate(['/user'])
    })

  }

  goBack() {
    this._router.navigate(['/user'])
  }

}
