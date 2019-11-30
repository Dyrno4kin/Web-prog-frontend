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
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user/shared/user.service';
import { FilesComponent } from './files/files.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  { path: 'main', component: LandingComponent,canActivate:[AuthGuard] },

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
  { 
    path: 'product',  
    component: MaterialsComponent,
    data: { roles: ['Admin'] },
    canActivate:[AuthGuard]
  },
  { 
    path: 'files',   
    component: FilesComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Файлы' }  
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MaterialsComponent,
    InfoComponent,
    FruitComponent,
    DrinkComponent,
    GrainComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    FilesComponent,
    FileSelectDirective
  ],
  imports: [
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
