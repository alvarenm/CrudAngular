import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ClientesDef } from './clienteDef';
@Injectable({
  providedIn: 'root'
})
//usado para criar um banco de dados em memoria para fazer as consultas
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const clientes = [
      {id: '1',
      nome:'Marcela',
    data:'28/02/1999',
    email:'malvarengajr@gmail.com',
    endereco:'xxx xxx'
    },
    {id: '2',
      nome:'Marcelo',
    data:'28/02/1999',
    email:'malvarengajr@gmail.com',
    endereco:'xxx xxx'
    },
    {id:'3',
      nome:'Marcelo',
    data:'28/02/1999',
    email:'malvarengajr@gmail.com',
    endereco:'xxx xxx'
    },
    {id: '4',
      nome:'Marcelo',
    data:'28/02/1999',
    email:'malvarengajr@gmail.com',
    endereco:'xxx xxx'
    },
    {id: '5',
      nome:'Marcelo',
    data:'28/02/1999',
    email:'malvarengajr@gmail.com',
    endereco:'xxx xxx'
    },

    ];
    return{clientes};
  }
  //TODO integrar com um Banco de Dados online
  genId(clientes: ClientesDef[]): number{
    return clientes.length + 1 
  }
  
}
