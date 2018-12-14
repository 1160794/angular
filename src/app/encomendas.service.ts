import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { encomenda } from './encomenda/encomenda';
import { MessageService } from './message.service';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncomendasService {

  constructor(private http: HttpClient , private messageService: MessageService) { }


  getEncomendas(): Observable<encomenda[]> {
    return this.http.get<encomenda[]>('http://localhost:8888/api/encomenda')
    .pipe(
      tap(_ => this.log('fetched encomendas')),
      catchError(this.handleError('getEncomendas', []))
    );
  }

  getEncomenda(encomendaId) : Observable<encomenda>{
    return this.http.get<encomenda>('http://localhost:8888/api/encomenda/'+encomendaId).pipe(
      tap(_ => this.log(`fetched encomenda _id=${encomendaId}`)),
      catchError(this.handleError<encomenda>(`getEncomenda _id=${encomendaId}`))
    );
  }
    /** PUT: update the encomenda on the server */
    updateEncomenda(encomenda: encomenda , id): Observable<any> {
      return this.http.put('http://localhost:8888/api/encomenda/'+id, encomenda, httpOptions).pipe(
        tap<encomenda>(updatedEncomenda => console.log(`updated encomenda = ${JSON.stringify(updatedEncomenda)}`)),
        catchError(this.handleError<encomenda>(`getEncomenda encomendaId=${id}`))
      );
  }

  
  
  deleteEncomenda(encomenda: encomenda | number): Observable<encomenda> {
    const id = typeof encomenda === 'number' ? encomenda : encomenda._id;

    return this.http.delete<encomenda>('http://localhost:8888/api/encomenda/'+id, httpOptions).pipe(
      tap(_ => this.log(`deleted encomenda _id=${id}`)),
      catchError(this.handleError<encomenda>('deleteEncomenda'))
    );
  } 

  private log(message: string) {
    this.messageService.add(`ProdutoService: ${message}`);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}
