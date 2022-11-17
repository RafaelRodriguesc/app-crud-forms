import { UserCadastroComponent } from './pages/user/user-cadastro/user-cadastro.component';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './pages/home/content/content.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './pages/user/user.component';
import { ClientComponent } from './pages/client/client.component';
import { ClientCadastroComponent } from './pages/client/client-cadastro/client-cadastro.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { FornecedoresCadastroComponent } from './pages/fornecedores/fornecedores-cadastro/fornecedores-cadastro.component';
import { UserAlteraComponent } from './pages/user/user-altera/user-altera.component';
import { ClientAlteraComponent } from './pages/client/client-altera/client-altera.component';
import { FornecedorAlteraComponent } from './pages/fornecedores/fornecedor-altera/fornecedor-altera/fornecedor-altera.component';
import { ProdutosComponent } from './pages/produtos/produtos/produtos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    UserCadastroComponent,
    ClientComponent,
    ClientCadastroComponent,
    FornecedoresComponent,
    FornecedoresCadastroComponent,
    UserAlteraComponent,
    ClientAlteraComponent,
    FornecedorAlteraComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
