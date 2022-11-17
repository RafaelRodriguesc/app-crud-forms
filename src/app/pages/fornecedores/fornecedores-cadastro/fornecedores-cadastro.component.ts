import { Fornecedores } from './../../models/fornecedores';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedores-cadastro',
  templateUrl: './fornecedores-cadastro.component.html',
  styleUrls: ['./fornecedores-cadastro.component.css']
})
export class FornecedoresCadastroComponent implements OnInit {

  formFornecedores: Fornecedores
  classesToApply: string = 'noShow'
  cepNaoEcontrado: boolean = false

  constructor(
    private _router: Router,
    private _fornecedorService: FornecedorService,
    private _http: HttpClient
  ) {
    this.formFornecedores = new Fornecedores
   }

  ngOnInit(): void {
  }

  goBack() {
    this._router.navigate(['/fornecedores'])

}

goCadastro() {
  this._fornecedorService.postItem(this.formFornecedores).subscribe(data => {
    console.log("data returned =>", data)
  })

}

getDadosCep (event:any) {
  this._http.get("https://viacep.com.br/ws/"+this.formFornecedores.endereco.cep+"/json/").subscribe( (dataCep: any) => {
    if(dataCep.erro){
      this.classesToApply = 'noShow';
      this.cepNaoEcontrado = true
      setTimeout(() => {
        this.cepNaoEcontrado = false
        this.formFornecedores.endereco.cep = ''
      }, 2000)
      return
    } else {
      console.log('dataCep', dataCep)
      this.classesToApply = 'show'
      this.formFornecedores.endereco.logradouro = dataCep.logradouro
      this.formFornecedores.endereco.bairro = dataCep.bairro
      this.formFornecedores.endereco.cidade = dataCep.localidade
      this.formFornecedores.endereco.estado = dataCep.uf

    }

})

}

}
