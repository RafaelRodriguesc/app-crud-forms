import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Fornecedores } from 'src/app/pages/models/fornecedores';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: any[] = []

  constructor(
    private _router: Router,
    private _fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
    this.buscaFornecedor()
  }

  buscaFornecedor () {
    this._fornecedorService.getAllFornecedores().subscribe(data => {
      this.fornecedores = data
    })
  }

  goDelete(id:number) {
    const params = {
      id: id,
      tabela:'clientes'
    }
    this._fornecedorService.deleteitem(params).subscribe(data => {
      console.log("data returned from delete", data)
      this.getAllfornecedores()
    })
  }
  getAllfornecedores() {
    this._fornecedorService.getAllFornecedores().subscribe(data => {
      this.fornecedores = data

    })
  }

  goAltera(id:number) {
    this._router.navigate(['./fornecedor-altera', id])

  }

}
