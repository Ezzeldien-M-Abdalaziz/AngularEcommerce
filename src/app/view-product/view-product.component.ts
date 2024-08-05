import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{
  productId!:number;
  product!: any; // Using 'any' type
  constructor(private activatedRouter:ActivatedRoute){}

  ngOnInit(){
    this.productId = this.activatedRouter.snapshot.params['id']; //get id from the url
    console.log(this.productId);
    this.fetchData();

  }
  fetchData() {
    fetch(`https://dummyjson.com/products/${this.productId}`)
      .then(res => res.json())
      .then(data => {
        this.product = data ;
        console.log(this.product); // Logging the fetched data

      })
      .catch(error => console.error('Error fetching data:', error));
  }


}
