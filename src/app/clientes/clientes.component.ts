import { Component, OnInit } from '@angular/core';
import { ClientesDef } from '../clientedef';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: ClientesDef[];

  constructor(private clienteService: ClienteService) { }
  ngOnInit() {
    //ja inicializa carregando a lista de clientes.
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes);
  }
  //utilizada para chamar a função adicionarCliente do Service.
  adicionar(nome: String, data: String, email: String, endereco: String):void {

    this.clienteService.adicionarCliente({nome, data, email, endereco} as ClientesDef)
      .subscribe(cliente => {
        this.clientes.push(cliente)
      })
  }
  //utilizada para chamar a função deletarCliente do service
  deletar(cliente: ClientesDef): void{
    this.clientes = this.clientes.filter(c => c !== cliente);
    this.clienteService.deletarCliente(cliente).subscribe;
  }
  
}
