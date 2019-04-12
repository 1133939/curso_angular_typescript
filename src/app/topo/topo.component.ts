import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas : Observable<Array<Oferta>>
  public items : Array<Oferta>

  private subjectPesquisa : Subject<string> = new Subject<string>()
  constructor(private ofertasService : OfertasService) { }

  ngOnInit() {
  this.ofertas = this.subjectPesquisa //retorno Oferta[]
  
  .pipe(debounceTime(1000),distinctUntilChanged(), switchMap((termo:string)=>{
     if(termo.trim()===''){
      return of<Array<Oferta>>([])
     }   
     console.log('fazendo requisicao')
    return this.ofertasService.pesquisaOfertas(termo)  //observable de array de ofertas

  }),catchError((erro) => {
    console.log(erro)
    return of<Array<Oferta>>([])
  })
  
  )
  this.ofertas.subscribe((ofertas:Array<Oferta>)=> {
 this.items = ofertas
 console.log(ofertas)
 return this.items
})
  }

  public pesquisa(pesquisa : string){
   this.subjectPesquisa.next(pesquisa)
  }

}
