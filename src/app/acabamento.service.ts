import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { acabamento } from './acabamento/acabamento';
import { MessageService } from './message.service';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AcabamentoService {

  constructor(private http: HttpClient , private messageService: MessageService) { }


  getAcabamentos(): Observable<acabamento[]> {
    return this.http.get<acabamento[]>('https://arqsi-djj.azurewebsites.net/api/Acabamento')
    .pipe(
      tap(_ => this.log('fetched acabamentos')),
      catchError(this.handleError('getAcabamentos', []))
    );
  }

  getAcabamento(acabamentoId) : Observable<acabamento>{
    return this.http.get<acabamento>('https://arqsi-djj.azurewebsites.net/api/Acabamento/'+acabamentoId).pipe(
      tap(_ => this.log(`fetched acabamento id=${acabamentoId}`)),
      catchError(this.handleError<acabamento>(`getacabamento id=${acabamentoId}`))
    );
  }

    /** PUT: update the material on the server */
    updateAcabamento(acabamento: acabamento): Observable<acabamento> {
      return this.http.put('https://arqsi-djj.azurewebsites.net/api/Acabamento/'+acabamento.id, acabamento, httpOptions).pipe(
        tap<acabamento>(updatedAcabamento => console.log(`updated acabamento = ${JSON.parse(JSON.stringify(updatedAcabamento))}`)),
        catchError(this.handleError<acabamento>(`getAcabamento acabamentoId=${acabamento.id}`))
      );
  }

  addAcabamento(acabamento: acabamento): Observable<acabamento> {
    return this.http.post<acabamento>('https://arqsi-djj.azurewebsites.net/api/Acabamento', acabamento, httpOptions).pipe(
      tap((acabamento1: acabamento) => this.log(`added Acabamento w/ id=${acabamento.id}`)),
      catchError(this.handleError<acabamento>('addAcabamento'))
    );
  }

  deleteAcabamento(acabamento: acabamento | number): Observable<acabamento> {
    const id = typeof acabamento === 'number' ? acabamento : acabamento.id;

    return this.http.delete<acabamento>('https://arqsi-djj.azurewebsites.net/api/Acabamento/'+id, httpOptions).pipe(
      tap(_ => this.log(`deleted acabamento id=${id}`)),
      catchError(this.handleError<acabamento>('deleteProduto'))
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
