import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Oferta} from './shared/oferta.model'


@Injectable()
export class DiversaoService{
constructor(private http : HttpClient){

}
    getCategoriaByString(categoria : string) : Promise<Array<Oferta>>{
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
    .toPromise().then((response : any)=> response)
    }
}