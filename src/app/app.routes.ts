import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './view-product/view-product.component';
// import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,title:'home'},
  { path: 'about', component: AboutComponent ,title:'about'},
  { path: 'register', component: RegisterComponent ,title:'register'},
  { path: 'login', component: LoginComponent,title:'login' },
  {path:'view-product/:id', component:ViewProductComponent},
  // { path: '**', component: NotFoundComponent }

];
