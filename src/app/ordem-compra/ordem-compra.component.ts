import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra : number

  public endereco : string =''
  public numero : string = ''
  public complemento: string =''
  public formaPagamento: string = ''

  public enderecoValido : boolean
  public numeroValido : boolean
  public complementoValido : boolean
  public formaPagamentoValido : boolean

  public enderecoPrimitivo : boolean = true
  public numeroPrimitivo : boolean = true
  public complementoPrimitivo : boolean = true
  public formaPagamentoPrimitivo : boolean = true

  public formEstado : string ='disabled'
  constructor(private service : OrdemCompraService) { }

  ngOnInit() {

  }
  public atualizaEndereco(endereco : string) : void{
this.endereco = endereco
if(endereco.length<3){
this.enderecoValido = false;
}else{
  this.enderecoValido = true;
}
this.enderecoPrimitivo = false;
this.habilitaCompra()
  }
  public atualizaNumero(numero : string) : void{
this.numero=numero
this.numeroValido = numero != '' ? true : false
this.numeroPrimitivo = false;
this.habilitaCompra()
  }
  public atualizaComplemento(complemento : string) : void{
this.complemento=complemento
this.complementoValido = complemento.length > 0 ? true : false
this.complementoPrimitivo = false;
this.habilitaCompra()
  }
  public atualizaFormaPagamento(formaPagamento : string): void{
this.formaPagamento=formaPagamento
this.formaPagamentoValido = formaPagamento == 'dinheiro' || formaPagamento=='debito' ? true : false
this.formaPagamentoPrimitivo = false;
this.habilitaCompra()
  }
  public habilitaCompra() : void{
if(this.enderecoValido == true && this.numeroValido == true && this.formaPagamentoValido == true){
this.formEstado=''
}else{
this.formEstado='disabled'
}
  }
  public confirmarCompra(pedido : Pedido) : void{
  this.service.efetivarCompra(new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento))
  .subscribe((response: number)=>this.idPedidoCompra=response)
  }

}
