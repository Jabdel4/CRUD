import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Client } from "./client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiURL = "https://localhost:44351/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.apiURL + 'clients')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getClient(id): Observable<Client> {
    return this.httpClient.get<Client>(this.apiURL + '/clients/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createClient(client): Observable<Client> {
    return this.httpClient.post<Client>(this.apiURL + '/clients/', JSON.stringify(client), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateClient(id, client): Observable<Client> {
    return this.httpClient.put<Client>(this.apiURL + '/clients/' + id, JSON.stringify(client), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteClient(id) {
    return this.httpClient.delete<Client>(this.apiURL + '/clients/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
