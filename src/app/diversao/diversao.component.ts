import { Component, OnInit } from '@angular/core';
import {Oferta} from '../shared/oferta.model'
import {DiversaoService} from '../diversao.service'
import {OfertasService} from '../ofertas.service'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [DiversaoService, OfertasService]
})
export class DiversaoComponent implements OnInit {
public ofertas : Array<Oferta>
  constructor(private service: DiversaoService, private ofertasService : OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao').then((ofertas: Array<Oferta>) => {
      this.ofertas = ofertas
    })
  //   this.service.getCategoriaByString('diversao').then((ofertas : Array<Oferta>) => {
  // this.ofertas = ofertas
  //   }
  //  )
  }

}
