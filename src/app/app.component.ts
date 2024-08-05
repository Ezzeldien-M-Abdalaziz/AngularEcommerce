import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
// import { NotFoundComponent } from './not-found/not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HomeComponent, NavbarComponent, AboutComponent, LoginComponent, RegisterComponent,ViewProductComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularEcommerce';
}
