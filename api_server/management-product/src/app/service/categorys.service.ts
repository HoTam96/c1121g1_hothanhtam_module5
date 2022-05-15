import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../model/ICategory";

@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  private api = environment.apiBaseUrl;

  constructor(private Http : HttpClient) {
  }

  getAllCategory():Observable<ICategory[]>{
    return this.Http.get<ICategory[]>(`${this.api}/category`)
}
}
