import {PipeTransform, Pipe} from '@angular/core'
@Pipe({name:'descricaoReduzida'})
export class DescricaoReduzida implements PipeTransform{
transform(text:string, truncarEm : number) : string{
if(text.length>truncarEm){
    return text.substr(0, truncarEm) + '... '
}
return text;
}
}