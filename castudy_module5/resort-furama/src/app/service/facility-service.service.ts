import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  private url = environment.baseUrl;

  constructor(private Http: HttpClient) {

  }

  getAllFacility(): Observable<any> {
    return this.Http.get<any>(`${this.url}/service`);
  }

  addNewFacility(facility): Observable<any> {
    return this.Http.post<any>(`${this.url}/service`, facility);
  }

  editFacility(id, facility): Observable<any> {
    return this.Http.put<any>(`${this.url}/service/${id}`, facility);
  }

  deleteFacility(id: number): Observable<any> {
    return this.Http.delete<any>(`${this.url}/service/${id}`);
  }

  getServiceType(): Observable<any> {
    return this.Http.get<any>(`${this.url}/serviceType`);
  }

}
