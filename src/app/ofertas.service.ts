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
		return this.http.get(`${URL_API}/ofertas?id=${id}`).toPromise()
		.then((response : any)=> {
return response.shift()
		})
	}
    public getOfertas() : Promise <Array<Oferta>>{
		//requisicao
		return this.http.get<Array<Oferta>>(`${URL_API}/ofertas?destaque=true`)
		.toPromise()
		.then((resposta : any) => resposta)
		
		}
		public getOfertasPorCategoria(categoria : string) : Promise <Array<Oferta>>{
			return this.http.get<Array<Oferta>>(`${URL_API}/ofertas?categoria=${categoria}`)
			.toPromise()
			.then((response : any) => response)
		}
		public getComoUsarOfertaPorId(id : number) : Promise<string>{
			return this.http.get(`${URL_API}/como-usar?id=${id}`).toPromise()
			.then((response: any) => {
				return response[0].descricao
			})
		}
		public getOndeFicaOfertaPorId(id: number) : Promise<string>{
			return this.http.get(`${URL_API}/onde-fica?id=${id}`).toPromise()
			.then((response : any) => {
				return response[0].descricao
			})
		}
		
}