import { Pedido } from './shared/pedido.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { URL_API } from './app.api';
import { map } from 'rxjs/operators';
@Injectable()
export class OrdemCompraService {
    constructor(private http : HttpClient){

    }
    public efetivarCompra(pedido : Pedido) : Observable<number>{
    let headers = new HttpHeaders({'Content-Type' : 'application/json'})
    let options = {headers}
     return this.http.post(`${URL_API}/pedidos`, (pedido), options).pipe(map((response:any) => 
     response.id))
     
    }
}