import { UserAlteraComponent } from './pages/user/user-altera/user-altera.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { ClientComponent } from './pages/client/client.component';
import { UserCadastroComponent } from './pages/user/user-cadastro/user-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/home/content/content.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { ClientCadastroComponent } from './pages/client/client-cadastro/client-cadastro.component';
import { FornecedoresCadastroComponent } from './pages/fornecedores/fornecedores-cadastro/fornecedores-cadastro.component';
import { ClientAlteraComponent } from './pages/client/client-altera/client-altera.component';
import { FornecedorAlteraComponent } from './pages/fornecedores/fornecedor-altera/fornecedor-altera/fornecedor-altera.component';
import { ProdutosComponent } from './pages/produtos/produtos/produtos.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent},
  { path:'header', component: HeaderComponent},
  { path:'content', component: ContentComponent},
  { path:'footer', component: FooterComponent},
  { path:'user', component: UserComponent},
  { path:'user-cadastro', component: UserCadastroComponent},
  { path:'client', component: ClientComponent},
  { path:'client-cadastro', component: ClientCadastroComponent},
  { path:'fornecedores', component: FornecedoresComponent},
  { path:'fornecedores-cadastro', component: FornecedoresCadastroComponent},
  { path:'user-altera/:id', component: UserAlteraComponent},
  { path:'client-altera/:id', component: ClientAlteraComponent},
  { path:'fornecedor-altera/:id', component: FornecedorAlteraComponent},
  { path:'produtos', component: ProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
