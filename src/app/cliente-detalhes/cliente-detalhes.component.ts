import { Component, OnInit, Input } from '@angular/core';
import { ClientesDef } from '../clientedef';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {
  //validei ClientesDef como um tipo de entrada
  @Input()cliente: ClientesDef
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCliente();
    //inicializei a pagina coletando o cliente selecionado
  }
  //coleta o cliente selecionado atraves de um id que nao é mostrado na tela, apenas na URL

  getCliente(): void{
    const  id =+ this.route.snapshot.paramMap.get("id")
    //armazena o valor de ID, que é um atributo invisivel apenas para direcionamento.
    
    this.clienteService.getCliente(id)
      .subscribe(cliente => this.cliente = cliente)
      //chama a função getCliente que esta no service)
  }
  goBack(): void{
    this.location.back;
  }
  save(): void{
    this.clienteService.atualizarCliente(this.cliente)
      .subscribe(()=> this.goBack);
      //salva as alterações feitas chamando a função atualizarCliente que esta no service
  }

}
