import ItemCarrinho from "./shared/item-carrinho.model";
import { Oferta } from './shared/oferta.model';
import { map } from 'rxjs/operators';

class CarrinhoService{
public itens : ItemCarrinho[] = []

public exibirItens(): Array<ItemCarrinho>{
    return this.itens
}
public incluirItem(oferta:Oferta) : void{
   let itemCarrinho : ItemCarrinho = new ItemCarrinho(oferta.id, oferta.imagens[0], oferta.titulo, oferta.descricao_oferta, oferta.valor, 1)
    let itemCarrinhoEncontrado = this.itens.find((item : ItemCarrinho)=>{
        return item.id == itemCarrinho.id
    })
    if(itemCarrinhoEncontrado){
        itemCarrinhoEncontrado.quantidade++
    }else{
    this.itens.push(itemCarrinho)
}
}
public totalCarrinho():number{
   let total : number = 0
    this.itens.map((item: ItemCarrinho)=>{
        total += item.quantidade*item.valor
    })
    return total
}
public aumentarQtd(item : ItemCarrinho):void{
item.quantidade++
}
public diminuirQtd(item : ItemCarrinho):void{
if(item.quantidade == 1){
this.itens.splice(this.itens.indexOf(item), 1)
}else{
item.quantidade--
}
}
public esvaziarCarrinho():void{
    this.itens=[]
}



}

export { CarrinhoService }