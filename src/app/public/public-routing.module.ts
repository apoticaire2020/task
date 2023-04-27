import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { PlayoutComponent } from './playout/playout.component';


const routes : Routes = [
  {path:'', component: PlayoutComponent , children:
        [{path:'' , redirectTo:'home' , pathMatch:'full' },
        {path:"home" , component : HomeComponent},
        {path:"contact", component : ContactComponent},
        {path:"cocktail", component : CocktailComponent} ]
  },
     ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ]
})
export class PublicRoutingModule { }
