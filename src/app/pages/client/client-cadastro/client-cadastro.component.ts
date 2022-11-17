import { Clientes } from './../../models/clientes';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-cadastro',
  templateUrl: './client-cadastro.component.html',
  styleUrls: ['./client-cadastro.component.css']
})
export class ClientCadastroComponent implements OnInit {

  formClient: Clientes
  classesToApply: string = 'noShow'
  cepNaoEcontrado: boolean = false

  constructor(
    private _router: Router,
    private _clientService: ClientService,
    private _http: HttpClient
  ) {
    this.formClient = new Clientes
  }

  ngOnInit(): void {
  }

  goBack() {
    this._router.navigate(['/client'])

}

goCadastro() {
  this._clientService.postItem(this.formClient).subscribe(data => {
    console.log("data returned =>", data)
  })

}

getDadosCep (event:any) {
  this._http.get("https://viacep.com.br/ws/"+this.formClient.endereco.cep+"/json/").subscribe( (dataCep: any) => {
    if(dataCep.erro){
      this.classesToApply = 'noShow';
      this.cepNaoEcontrado = true
      setTimeout(() => {
        this.cepNaoEcontrado = false
        this.formClient.endereco.cep = ''
      }, 2000)
      return
    } else {
      console.log('dataCep', dataCep)
      this.classesToApply = 'show'
      this.formClient.endereco.logradouro = dataCep.logradouro
      this.formClient.endereco.bairro = dataCep.bairro
      this.formClient.endereco.cidade = dataCep.localidade
      this.formClient.endereco.estado = dataCep.uf

    }

})

}


}
