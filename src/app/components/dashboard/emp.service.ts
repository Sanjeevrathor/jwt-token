import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Employee } from './user-list/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private _httpClient: HttpClient) { }
  private apiURL = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll(): Observable<any> {
    return this._httpClient.get(this.apiURL + '/employees/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
   
  create(post:Employee): Observable<any> {
    return this._httpClient.post(this.apiURL + '/employees/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:number): Observable<any> {
    return this._httpClient.get(this.apiURL + '/employees/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, post:Employee): Observable<any> {
    return this._httpClient.put(this.apiURL + '/employees/' + id, JSON.stringify(post), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this._httpClient.delete(this.apiURL + '/employees/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

   errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
