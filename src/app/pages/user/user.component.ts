import { UserService } from 'src/app/services/user.service';
import { Users } from './../models/users';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarios: any[] = []

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.buscaUsuarios()
  }

  buscaUsuarios() {
    this._userService.getALLUsers().subscribe(data =>{
      this.usuarios = data
    })
  }

  goDelete(id:number) {
    const params = {
      id: id,
      tabela:'clientes'
    }
    this._userService.deleteitem(params).subscribe(data => {
      console.log("data returned from delete", data)
      this.getAllUsers()
    })
  }
  getAllUsers() {
    this._userService.getALLUsers().subscribe(data => {
      this.usuarios = data

    })
  }

  goAltera(id:number) {
    this._router.navigate(['user-altera', id])

  }

}
