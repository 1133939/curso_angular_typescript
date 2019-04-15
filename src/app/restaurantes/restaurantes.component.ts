import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

public ofertas : Array<Oferta>
public dataTest : any = new Date(2017, 8, 30)

  constructor(private ofertasService : OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas : Array<Oferta>) => {
      this.ofertas=ofertas;
    })
  }

}
