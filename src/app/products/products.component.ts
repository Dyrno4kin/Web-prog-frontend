import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ProductService } from 'src/app/products/shared/product.service'
import { ToastrService } from 'ngx-toastr';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  @ViewChild(ProductListComponent, { static: false }) list: ProductListComponent;

  constructor(private productService: ProductService, private toastr: ToastrService, private http: HttpClient) {
    this.ws.onopen = () => {
      this.setStatus('ONLINE');
      this.ws.onmessage = (response) => {
        this.toastr.success(response.data);
        this.printMessage(response.data);
      };
    };
  }

  private sub = document.getElementById('submit');
  private ws = new WebSocket('ws://localhost:3000');
  setStatus(value) {
    console.log(value)
  }
  printMessage(value) {
    //  this.toastr.success('User login successful');
    console.log(value);
  }
  SendMessage() {
    console.log("I'm is Admin and i send message!");
    this.ws.send('isUpgrade');
  }


  ngOnInit() {
    this.toastr.success("до запроса")
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const data: any = {
      'url': 'ws://localhost:3000'
    };
    this.http.post("http://localhost:3100/subscribe", <JSON>data, httpOptions).subscribe(data => {
      console.log(data);
    });
    console.log("после запроса2")
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.productService.selectedProduct = {
      id: null,
      ProductName: '',
      ProductPrice: '',
      ProductType: '',
      ProductDescription: '',
      ProductCount: null
    }
  }

  onSubmit(form: NgForm) {

    if (form.value.id == null) {
      this.productService.postProduct(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.toastr.success('Запись добавлена!', 'Products');
          this.list.ngOnInit();
        })
    }
    else {
      this.productService.putProduct(form.value.id, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.list.ngOnInit();
          this.toastr.success('Запись изменена!', 'Products');
        });
    }
  }



}