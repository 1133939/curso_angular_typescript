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
  }
  
  ngOnDestroy(){
  }

}
