//TODO adicionar funcionalidade de tabela de premios para os clientes
import { Component, OnInit } from '@angular/core';
import { ClientesDef } from '../clienteDef';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  clientes: ClientesDef[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }
  getClientes(): void{
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes.slice(1,5));
  }

}
