import { ClientService } from './../../services/client.service';
import { Clientes } from 'src/app/pages/models/clientes';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientes: any[] = []

  constructor(
    private _router: Router,
    private _clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.buscaCliente()
  }

  buscaCliente () {
    this._clientService.getAllClients().subscribe(data => {
      this.clientes = data
    })
  }

  goDelete(id:number) {
    const params = {
      id: id,
      tabela:'clientes'
    }
    this._clientService.deleteitem(params).subscribe(data => {
      console.log("data returned from delete", data)
      this.getAllUsers()
    })
  }
  getAllUsers() {
    this._clientService.getAllClients().subscribe(data => {
      this.clientes = data

    })
  }

  goAltera(id:number) {
    this._router.navigate(['./client-altera', id])

  }

}
