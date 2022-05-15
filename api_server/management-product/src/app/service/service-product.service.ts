import {Injectable} from '@angular/core';
import {Iproduct} from "../model/iproduct";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  products: Iproduct[] = [];

  private api = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.api}/product/${id}`,)
  }

  getAll(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${this.api}/product`);
  }

  save(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(`${this.api}/product`, product)

  }


  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/product/${id}`)

  }

  update(id: number, product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(`${this.api}/product/${id}`, product);
  }

  searchName(keyWork):Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${this.api}/product?name_like=${keyWork}`);
    // http://localhost:3000/product?name_like=14
  }

}
