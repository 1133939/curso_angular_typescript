import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, interval, Observer, Subscription} from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
public oferta : Oferta
private tempoObservableSubscribe : Subscription
private observableTest : Subscription
  constructor(private route: ActivatedRoute, private ofertasService : OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id']).then((oferta:Oferta) => {
    this.oferta = oferta
    })
    // this.route.params.subscribe(
    //   (parametro: any) => { console.log(parametro)},
    //   (erro : any) => console.log(erro),
    //   ()=> console.log('completo subscribe')
    // )

    let tempo = interval(2000);
   this.tempoObservableSubscribe = tempo.subscribe((intervalo:number) => console.log(intervalo))


  let meuObservableTest = Observable.create((observer : Observer<number>)=>{
    observer.next(1)
    //observer.error('Erro encontrado')
    observer.complete()
    observer.next(2)
  })

  this.observableTest = meuObservableTest.subscribe(
    (resposta:any) => console.log(resposta+1),
    (erro:any) => console.log(erro),
    () => console.log('Completo')
  )
  }
  ngOnDestroy(){
    this.observableTest.unsubscribe();
    this.tempoObservableSubscribe.unsubscribe();
  }

}
