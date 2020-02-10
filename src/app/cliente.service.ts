import { Injectable } from '@angular/core';
import { ClientesDef } from './clienteDef';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensagensService } from './mensagens.service';
//fiz as importações necessarias.
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private mensagensService: MensagensService,
    private http: HttpClient) { }

    getClientes(): Observable <ClientesDef[]>{
      //usada para obter a lista de clientes
      return this.http.get<ClientesDef[]>(this.clientesUrl)
      .pipe(tap(_ => this.log('Clientes')),
      catchError(this.handleError<ClientesDef[]>('getClientes', [])))
    }
    getCliente(id: number): Observable<ClientesDef>{
      //usada para obter os detalhes de algum clientes
      const url = `${this.clientesUrl}/${id}`;
      return this.http.get<ClientesDef>(url).pipe(
        tap(_ => this.log(`Cliente escolhido é numero: ${id}`)),
        catchError(this.handleError<ClientesDef>(`getCliente id: ${id}`))

      )
    }
    private log (mensagem: String){
      //me permite fazer o serviço de mensagens de erro.
      this.mensagensService.add(`ClienteService: ${mensagem}`);
    }
    private handleError<T> (operation = 'operation', result?: T){
      //função genera para tratamento de erro
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      }
    }
    //definição do formato da URL
    private clientesUrl = 'api/clientes';
    //utilizada para atualizar o cadastro de algum cliente
    atualizarCliente(cliente: ClientesDef): Observable<any>{
      return this.http.put(this.clientesUrl, cliente, this.httpOptions);
    }
    //usada para adicionar um cliente a lista
    adicionarCliente(cliente: ClientesDef): Observable<ClientesDef>{
      return this.http.post<ClientesDef>(this.clientesUrl, cliente, this.httpOptions).pipe(
        tap((novoCliente: ClientesDef) => this.log(`Cliente Adicionado coom o nome de ${novoCliente.nome}`)),
        catchError(this.handleError<ClientesDef>('adicionarCliente'))
      )
    }
    //usada para deletar clientes da lista
    deletarCliente(cliente: ClientesDef | number): Observable<ClientesDef>{
      const id = typeof cliente === 'number' ? cliente: cliente.id;
      const url = `${this.clientesUrl}/${id}`;

      return this.http.delete<ClientesDef>(url, this.httpOptions).pipe(
        tap(_=> this.log(`id do cliente deletado: ${id}`)),
        catchError(this.handleError<ClientesDef>('deletarCliente'))
      )
    }
    httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    }
}
