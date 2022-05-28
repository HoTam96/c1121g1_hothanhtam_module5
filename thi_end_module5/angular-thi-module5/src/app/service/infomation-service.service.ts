import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ILand} from "../model/ILand";

@Injectable({
  providedIn: 'root'
})
export class InfomationServiceService {
  private api = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAll(pageable, price , area , direction,sortValue ): Observable<ILand[]> {
    return this.http.get<ILand[]>(`${this.api}/all?page=${pageable}&price=${price}&area=${area}&direction=${direction}&sortValue=${sortValue}`);
  }

  addNew(land): Observable<ILand> {
    return this.http.post<ILand>(`${this.api}/add`, land);
  }
  getCategory():Observable<any>{
    return this.http.get<any>(`${this.api}/category`)
  }

  getPostUp():Observable<any>{
    return this.http.get<any>(`${this.api}/postUp`)
  }


  getDirection():Observable<any>{
    return this.http.get<any>(`${this.api}/direction`)
  }

  getRegion():Observable<any>{
    return this.http.get<any>(`${this.api}/region`)
  }
}
