import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaComponent } from './tabela/tabela.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component';


const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'tabela', component: TabelaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'detalhes/:id', component: ClienteDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
