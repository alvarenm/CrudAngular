import { Injectable } from '@angular/core';
//serviço de mensagens usado apenas para tratamento de erros.
@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  mensagens: string[] = [];

  add(mensagem: string){
    this.mensagens.push(mensagem);
  }

  clear(){
    this.mensagens = [];
  }

}
