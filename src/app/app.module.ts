import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MaterialsComponent } from './materials/materials.component';
import { InfoComponent } from './info/info.component';
import { FruitComponent } from './fruit/fruit.component';
import { GrainComponent } from './grain/grain.component';
import { DrinkComponent } from './drink/drink.component';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: LandingComponent,
    data: { title: 'Главная' } 
  },
  { 
    path: 'info',  
    component: InfoComponent,
    data: { title: 'О сайте' }
  },
  { 
    path: 'fruit',  
    component: FruitComponent,
    data: { title: 'Фрукты' }
  },
  { 
    path: 'grain',  
    component: GrainComponent,
    data: { title: 'Крупы' }
  },
  { 
    path: 'drink',  
    component: DrinkComponent,
    data: { title: 'Напитки' }
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MaterialsComponent,
    InfoComponent,
    FruitComponent,
    DrinkComponent,
    GrainComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
