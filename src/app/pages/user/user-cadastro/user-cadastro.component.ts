import { HttpClient } from '@angular/common/http';
import { Users, dadosTelefone, dadosEndereco } from 'src/app/pages/models/users';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cadastro',
  templateUrl: './user-cadastro.component.html',
  styleUrls: ['./user-cadastro.component.css']
})
export class UserCadastroComponent implements OnInit {

  formUsuario: Users
  classesToApply: string = 'noShow'
  cepNaoEcontrado: boolean = false


  constructor(
    private _router: Router,
    private _userService: UserService,
    private _http: HttpClient
  ) {
    this.formUsuario = new Users

  }

  ngOnInit(): void {
  }

  goBack() {
    this._router.navigate(['/user'])
  }

  goCadastro() {
    this._userService.postItem(this.formUsuario).subscribe(data => {
      console.log("data returned =>", data)
    })

  }

  getDadosCep (event:any) {
    this._http.get("https://viacep.com.br/ws/"+this.formUsuario.endereco.cep+"/json/").subscribe( (dataCep: any) => {
      if(dataCep.erro){
        this.classesToApply = 'noShow';
        this.cepNaoEcontrado = true
        setTimeout(() => {
          this.cepNaoEcontrado = false
          this.formUsuario.endereco.cep = ''
        }, 2000)
        return
      } else {
        console.log('dataCep', dataCep)
        this.classesToApply = 'show'
        this.formUsuario.endereco.logradouro = dataCep.logradouro
        this.formUsuario.endereco.bairro = dataCep.bairro
        this.formUsuario.endereco.cidade = dataCep.localidade
        this.formUsuario.endereco.estado = dataCep.uf

      }

  })

}
}
