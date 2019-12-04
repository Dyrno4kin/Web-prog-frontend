import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Product } from './product.model';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class ProductService {  
  selectedProduct : Product;
  productList : Product[];
  url = 'http://localhost:49879/api/Products';  
  constructor(private http: HttpClient) { }  
  getAllProduct(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.url);  
  }  
  getProductById(id: number): Observable<Product> {  
    return this.http.get<Product>(this.url + "/" + id);  
  }  
  postProduct(Product: Product): Observable<Product> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Product>(this.url, Product, httpOptions);  
  }   
  putProduct(id: number, Product: Product): Observable<Product> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Product>(this.url + "/" + id, Product, httpOptions);  
  }  
  deleteProduct(id: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + "/" + id, httpOptions);  
  }  
  getResult(text: string): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const data: any = {
    "text": text
    };
    return this.http.post('http://localhost:49879/api/Search/?text=' + text, <JSON>data, httpOptions)
  }
}