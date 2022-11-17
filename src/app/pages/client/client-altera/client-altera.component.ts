import { Clientes } from './../../models/clientes';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-altera',
  templateUrl: './client-altera.component.html',
  styleUrls: ['./client-altera.component.css']
})
export class ClientAlteraComponent implements OnInit {

  cepNaoEcontrado: boolean = false
  idClient: number | null = 0
  formClient:Clientes

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _clientService: ClientService
  ) {
    this.formClient = new Clientes
  }

  ngOnInit(): void {
    this.idClient = Number (this._activatedRoute.snapshot.paramMap.get('id'))
    console.log("id do cliente", this.idClient)
    this.buscausuarioId(this.idClient)
  }

  buscausuarioId(id:number) {
    this._clientService.getClient(id).subscribe(data => {
      console.log("data do usuarios", data)
      this.formClient = data
    })
}

getDadosCep(event: any) {
  this._http.get("https://viacep.com.br/ws/"+this.formClient.endereco.cep+"/json/").subscribe( (dataCep: any) => {
    if(dataCep.erro){
      this.cepNaoEcontrado = true
      setTimeout(() => {
        this.cepNaoEcontrado = false
        this.formClient.endereco.cep = ''
      }, 2000)
      return
      }
    this.formClient.endereco.logradouro = dataCep ['logradouro']
    this.formClient.endereco.bairro = dataCep ['bairro']
    this.formClient.endereco.cidade = dataCep ['localidade']
    this.formClient.endereco.estado = dataCep ['uf']
  })
}

goAltera() {
  console.log("this.formClient", this.formClient)
  this._clientService.putcliente(this.formClient).subscribe(data =>{
    console.log('data retorno', data)
    this._router.navigate(['/client'])
  })

}

goBack() {
  this._router.navigate(['/client'])
}

}
