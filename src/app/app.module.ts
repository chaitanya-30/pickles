import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PickledescComponent } from './pickledesc/pickledesc.component';
import { Routes, RouterModule, RouteReuseStrategy, ActivatedRoute } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FavComponent } from './fav/fav.component';
import { HeaderComponent } from './header/header.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { CartpageComponent } from './cartpage/cartpage.component';

const approutes:Routes=[{path:'',component:HomeComponent},
// {path:'home',component:HomeComponent},
{
  path:'product',component:ProductpageComponent
},
{path:'pickledesc/:id',component:PickledescComponent},
{path:'product/:searchItem',component:ProductpageComponent},

{path:'fav',component:FavComponent},
{path:'cart',component:CartpageComponent},
{ path: '**', component: PagenotfoundComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PickledescComponent,
   
    FavComponent,
        HeaderComponent,
        ProductpageComponent,
        CartpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule

  ],
  exports: [RouterModule],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
