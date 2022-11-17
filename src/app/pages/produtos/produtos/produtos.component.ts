import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from './../../../services/produtos.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = new FormGroup({
    fabricante: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    processador: new FormControl('', [Validators.required]),
    ram: new FormControl('', [Validators.required]),
    placaVideo: new FormControl('', [Validators.required]),
    resolucao: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required])
  })

  constructor(
    private _produtosService: ProdutosService,
    private _http: HttpClient,
    private _router: Router
    ) { }

  ngOnInit(): void {

  }

  salvar() {
    this._produtosService.postItem(this.produtos.value).subscribe(data => {
      console.log("data returned =>", data)
    })

    console.log(this.produtos.value)
  }

}
