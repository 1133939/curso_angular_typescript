import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas : Observable<Array<Oferta>>
  private subjectPesquisa : Subject<string> = new Subject<string>()
  constructor(private ofertasService : OfertasService) { }

  ngOnInit() {
  this.ofertas = this.subjectPesquisa //retorno Oferta[]
  
  .pipe(debounceTime(1000), switchMap((termo:string)=>{
    console.log('requisicao http para a api')
    return this.ofertasService.pesquisaOfertas(termo)  //observable de array de ofertas

  }))
  this.ofertas.subscribe((ofertas:Array<Oferta>)=> console.log(ofertas))
  }

  public pesquisa(pesquisa : string){
    console.log('keyup caracter', pesquisa)
   this.subjectPesquisa.next(pesquisa)
  }

}
