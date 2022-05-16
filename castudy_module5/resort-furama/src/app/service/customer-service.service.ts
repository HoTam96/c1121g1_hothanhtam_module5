import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICustomer} from "../model/ICustomer";
import {ICustomerType} from "../model/ICustomerType";


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private baseUrl = environment.baseApiUrl;

  constructor(private Http: HttpClient) {
  }

  getAllCustomer(keyValue ,pageable): Observable<any> {
    return this.Http.get<any>(`${this.baseUrl}/customer?page=${pageable}&keyWord=${keyValue}`)
  }
  deleteCustomer(customer): Observable<void> {
    return this.Http.put<void>(`${this.baseUrl}/delete`, customer)
  }


  addCustomer(customer: ICustomer): Observable<void> {
    return this.Http.post<void>(`${this.baseUrl}/add`, customer);
  }

  getAllCustomerType(): Observable<ICustomerType[]> {
    return this.Http.get<ICustomerType[]>(`${this.baseUrl}/CustomerType`)
  }

  updateCustomer(customer: ICustomer): Observable<void> {
    return this.Http.put<void>(`${this.baseUrl}/update`, customer)
  }


}
