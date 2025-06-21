import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products:any;
  constructor(private productService:ProductService) {
    this.productService = productService;
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.products = this.productService.getAllProducts().subscribe({
      next:resp=> {
        this.products = resp;
      },
      error: err=>{
        console.log(err);
      }
    });
  }
  handleDelete(product:any){
    let v = confirm('êtes vous sûre de vouloir supprimer?')
    if(v){
    this.productService.deleteProduct(product).subscribe(
      {
        next:value=> {
          this.getAllProducts();
        },
        error: err=>{
          console.log(err);
        }
      }
    );
    this.getAllProducts();
    }
  }


}
