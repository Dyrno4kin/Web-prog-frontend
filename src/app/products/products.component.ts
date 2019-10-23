import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ProductService } from 'src/app/products/shared/product.service'
import { ToastrService } from 'ngx-toastr';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  @ViewChild(ProductListComponent, {static: false}) list: ProductListComponent;

  constructor(private productService: ProductService, private toastr: ToastrService){
    //this.list = new ProductListComponent(ProductService, ToastrService);
   }
  
  ngOnInit() {
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