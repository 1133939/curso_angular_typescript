import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'
import {Oferta} from '../shared/oferta.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

public ofertas : Array<Oferta>

  constructor(private ofertasService : OfertasService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas();
    //console.log(this.ofertas);

    this.ofertasService.getOfertas2()
    .then(
      (ofertas: Array<Oferta>) => { 
        console.log("funcao resolve() foi resolvida depois de 3 segundos")
        this.ofertas = ofertas
      })
      
    .catch((param:any) => {console.log(param)})
  }

}
