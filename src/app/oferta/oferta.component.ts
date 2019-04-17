import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, interval, Observer, Subscription} from 'rxjs';
import { CarrinhoService } from '../carrinho.service';


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
  constructor(
    private route: ActivatedRoute, 
    private ofertasService : OfertasService, 
    private carrinhoService : CarrinhoService) { }
public exibirItens(){
  console.log('oferta component',this.carrinhoService.exibirItens())
}
  ngOnInit() {
    this.route.params.subscribe((parametros:Params) => {  
      this.ofertasService.getOfertasPorId(parametros.id)
      .then((oferta:Oferta) => {
      this.oferta = oferta
      })
      })
  }
  
  ngOnDestroy(){
  }
  public adicionarItemCarrinho(oferta : Oferta): void{
    this.carrinhoService.incluirItem(oferta)
    this.exibirItens()
  }

}
