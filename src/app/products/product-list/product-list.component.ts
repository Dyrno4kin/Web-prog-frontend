import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { ToastrService } from 'ngx-toastr';  
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
//import { WebsocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  http: any;
  
  constructor(private productService: ProductService, private toastr : ToastrService) { }
  prods:Product[];
  ngOnInit() {
    this.productService.getAllProduct().subscribe(x => this.prods=x);
  }
 
  showForEdit(emp: Product) {
    this.productService.selectedProduct = Object.assign({}, emp);
  }
 
  onDelete(id: number) {
    this.productService.deleteProduct(id)
    .subscribe(x => {
      this.productService.getAllProduct().subscribe(x => this.prods=x);
    })
  }
  getResult(text: string) {
    if(text == "") this.productService.getAllProduct().subscribe(x => this.prods=x);
    else this.productService.getResult(text).subscribe(x => this.prods=x);
  }
}