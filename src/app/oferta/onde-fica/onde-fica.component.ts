import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
public descricao : string = ''
  constructor(private route: ActivatedRoute, private service : OfertasService) { }

  ngOnInit() {

    this.route.parent.params.subscribe((param: Params)=> {

      this.service.getOndeFicaOfertaPorId(param.id)
      .then((descricao : string) => this.descricao = descricao)
    })

  }

}
