import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products=[
    {id:"1",name:"Coca",price:2500,selected:true},
    {id:"2",name:"Danon",price:2200,selected:false},
    {id:"3",name:"SmartPhone",price:2000,selected:true},
  ]
  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get("http://localhost:8083/products");
  }
  deleteProduct(product:any){
   // let v = confirm('êtes vous sûre de vouloir supprimer ?');
    //if(v){
      //this.products=this.products.filter((p:any)=>p.id != product.id);
    //}
    return this.http.delete("http://localhost:8083/products/"+product.id);
  }
}
