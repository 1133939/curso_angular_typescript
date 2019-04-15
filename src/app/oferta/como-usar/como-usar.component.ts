import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
public descricao : string

  constructor(private route : ActivatedRoute, private service : OfertasService) { }

  ngOnInit() {
  this.route.parent.params.subscribe((param : Params) => {

    this.service.getComoUsarOfertaPorId(param.id)
    .then((desc : string) => {
    this.descricao=desc})
  })


  
  }

}
