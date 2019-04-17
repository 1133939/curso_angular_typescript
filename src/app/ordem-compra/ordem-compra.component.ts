import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import ItemCarrinho from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra : number
  public itensCarrinho : Array<ItemCarrinho> = []

public formulario : FormGroup = new FormGroup({
  'endereco': new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
  'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(120)]),
  'complemento' : new FormControl(null),
  'formaPagamento' : new FormControl(null,[Validators.required])
})
  constructor(private ordemCompraService: OrdemCompraService, private carrinhoService : CarrinhoService) { }

  ngOnInit() {
   this.itensCarrinho = this.carrinhoService.exibirItens()
  }

  public confirmarCompra(): void {
    if(this.formulario.status == 'INVALID'){
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()
    }else{
      if(this.itensCarrinho.length>0){
        let pedido = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.carrinhoService.exibirItens())

      this.ordemCompraService.efetivarCompra(pedido)
          .subscribe((response:number) => {
            this.idPedidoCompra=response
           this.carrinhoService.esvaziarCarrinho()
          })
    }else{
      alert('Você não selecionou nenhum item no carrinho!')
    }
  }
  }
  public aumentarQtd(item : ItemCarrinho){
    this.carrinhoService.aumentarQtd(item)
  }
  public diminuirQtd(item : ItemCarrinho){
    this.carrinhoService.diminuirQtd(item)
  }
}
