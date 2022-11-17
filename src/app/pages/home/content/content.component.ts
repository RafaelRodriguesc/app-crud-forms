import { Router } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  totalCadastrados: number = 100
  clientePorc: string = ''
  produtos: any[] = []

  constructor(
    private _produtosService: ProdutosService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const clientes = (this.totalCadastrados*50)/100
    this.clientePorc = `${clientes.toString()}%`

    this.buscaProduto()
  }

  buscaProduto () {
    this._produtosService.getAllProdutos().subscribe(data => {
      this.produtos = data
    })
  }

  getAllProdutos() {
    this._produtosService.getAllProdutos().subscribe(data => {
      this.produtos = data

    })
  }

  goDelete(id:number) {
    const params = {
      id: id,
      tabela:'clientes'
    }
    this._produtosService.deleteitem(params).subscribe(data => {
      console.log("data returned from delete", data)
      this.getAllProdutos()
    })
  }



}
