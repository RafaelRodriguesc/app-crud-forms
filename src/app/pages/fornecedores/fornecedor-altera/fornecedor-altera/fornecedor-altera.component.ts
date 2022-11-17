import { Fornecedores } from './../../../models/fornecedores';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-altera',
  templateUrl: './fornecedor-altera.component.html',
  styleUrls: ['./fornecedor-altera.component.css']
})
export class FornecedorAlteraComponent implements OnInit {

  cepNaoEcontrado: boolean = false
  idFornecedor: number | null = 0
  formFornecedor: Fornecedores

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _fornecedorService: FornecedorService
  ) {
    this.formFornecedor = new Fornecedores
  }

  ngOnInit(): void {
    this.idFornecedor = Number (this._activatedRoute.snapshot.paramMap.get('id'))
    console.log("id do fornecedor", this.idFornecedor)
    this.buscaFornecedorId(this.idFornecedor)
  }

  buscaFornecedorId(id:number) {
    this._fornecedorService.getFornecedor(id).subscribe(data => {
      console.log("data do usuarios", data)
      this.formFornecedor = data
    })
}

getDadosCep(event: any) {
  this._http.get("https://viacep.com.br/ws/"+this.formFornecedor.endereco.cep+"/json/").subscribe( (dataCep: any) => {
    if(dataCep.erro){
      this.cepNaoEcontrado = true
      setTimeout(() => {
        this.cepNaoEcontrado = false
        this.formFornecedor.endereco.cep = ''
      }, 2000)
      return
      }
    this.formFornecedor.endereco.logradouro = dataCep ['logradouro']
    this.formFornecedor.endereco.bairro = dataCep ['bairro']
    this.formFornecedor.endereco.cidade = dataCep ['localidade']
    this.formFornecedor.endereco.estado = dataCep ['uf']
  })
}

goAltera() {
  console.log("this.formFornecedor", this.formFornecedor)
  this._fornecedorService.putfornecedor(this.formFornecedor).subscribe(data =>{
    console.log('data retorno', data)
    this._router.navigate(['/fornecedores'])
  })

}

goBack() {
  this._router.navigate(['/fornecedores'])
}

}
