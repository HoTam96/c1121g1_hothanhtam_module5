import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBook} from "./model/IBook";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {IStudent} from "./model/IStudent";

@Injectable({
  providedIn: 'root'
})
export class BrowBookServiceService {
  private api = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.api}/book`);
  }

  getStudentList(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.api}/student`);
  }

  getBookById(id): Observable<IBook> {
    return this.http.get<IBook>(`${this.api}/book/${id}`);
  }

  addNewBrowBook(browBook): Observable<any> {
    return this.http.post<any>(`${this.api}/browBook`, browBook);
  }

  updateBook(id: number, book): Observable<any> {
    return this.http.put<any>(`${this.api}/book/${id}`, book);

  }

  getAllBrowBook(): Observable<any> {
    return this.http.get<any>(`${this.api}/browBook`);
  }

  updateBrowBook(id, browBook): Observable<any> {
    return this.http.put<any>(`${this.api}/browBook/${id}`, browBook);
  }

  findBookById(id): Observable<any> {
    return this.http.get<any>(`${this.api}/book/${id}`)
  }

}
