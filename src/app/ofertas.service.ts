import { Oferta } from './shared/oferta.model'
import { reject } from 'q';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs'

@Injectable()
export class OfertasService{
	constructor(private http : HttpClient){

	}

    public getOfertas() : Promise <Array<Oferta>>{
		//requisicao
		return this.http.get<Array<Oferta>>("http://localhost:3000/ofertas?destaque=true")
		.toPromise()
		.then((resposta : any) => resposta)
		
		}
		public getOfertasPorCategoria(categoria : string) : Promise <Array<Oferta>>{
			return this.http.get<Array<Oferta>>(`http://localhost:3000/ofertas?categoria=${categoria}`)
			.toPromise()
			.then((response : any) => response)
		}
}