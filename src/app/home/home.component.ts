import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products: any[] = [];

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        this.products = data.products;
        console.log(this.products); // Logging the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  addToCart(product: any) {
    console.log('Added to cart:', product);
    // Implement cart functionality here, such as updating a cart array or emitting an event
  }
}

