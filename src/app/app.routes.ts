import {Routes} from '@angular/router'

import {HomeComponent} from '../app/home/home.component'
import {RestaurantesComponent} from '../app/restaurantes/restaurantes.component'
import {DiversaoComponent} from '../app/diversao/diversao.component'
import {OfertaComponent} from '../app/oferta/oferta.component'

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'restaurantes', component: RestaurantesComponent},
    {path:'diversao', component: DiversaoComponent},
    {path:'oferta', component: OfertaComponent},
    {path:'oferta/:id', component: OfertaComponent}
    

]
