import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
@ViewChild ('formulario') public formulario : NgForm
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }
  public confirmarCompra():void{
    console.log(this.formulario)
  }
}
