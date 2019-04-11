import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
public descricao : string
  constructor(private route: ActivatedRoute, private service : OfertasService) { }

  ngOnInit() {
    this.service.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((descricao : string) => this.descricao = descricao)
  }

}
