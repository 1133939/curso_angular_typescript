import { Oferta } from './shared/oferta.model'
import { reject } from 'q';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs'
import {URL_API} from './app.api'
@Injectable()
export class OfertasService{
	constructor(private http : HttpClient){

	}
	public getOfertasPorId(id: number) : Promise <Oferta>{
		return this.http.get(`${URL_API}?id=${id}`).toPromise()
		.then((response : any)=> {
return response.shift()
		})
	}
    public getOfertas() : Promise <Array<Oferta>>{
		//requisicao
		return this.http.get<Array<Oferta>>(`${URL_API}?destaque=true`)
		.toPromise()
		.then((resposta : any) => resposta)
		
		}
		public getOfertasPorCategoria(categoria : string) : Promise <Array<Oferta>>{
			return this.http.get<Array<Oferta>>(`${URL_API}?categoria=${categoria}`)
			.toPromise()
			.then((response : any) => response)
		}
		
}