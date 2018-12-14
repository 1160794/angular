import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { categoria } from './categoria/categoria';
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
export class CategoriaService {

  constructor(private http: HttpClient , private messageService: MessageService) { }



  getCategorias(): Observable<categoria[]> {
    return this.http.get<categoria[]>('https://arqsi-djj.azurewebsites.net/api/Categoria')
    .pipe(
      tap(_ => this.log('fetched categorias')),
      catchError(this.handleError('getCategorias', []))
    );
  }

  getCategoria(categoriaId) : Observable<categoria>{
    return this.http.get<categoria>('https://arqsi-djj.azurewebsites.net/api/Categoria/'+categoriaId).pipe(
      tap(_ => this.log(`fetched material id=${categoriaId}`)),
      catchError(this.handleError<categoria>(`getCategoria id=${categoriaId}`))
    );
  }

    /** PUT: update the material on the server */
    updateCategoria(categoria: categoria): Observable<any> {
      return this.http.put('https://arqsi-djj.azurewebsites.net/api/Categoria/'+categoria.id, categoria, httpOptions).pipe(
        tap<categoria>(updatedCategoria => console.log(`updated categoria = ${JSON.parse(JSON.stringify(updatedCategoria))}`)),
        catchError(this.handleError<categoria>(`getCategoria categoriaId=${categoria.id}`))
      );
  }

  addCategoria(categoria: categoria): Observable<categoria> {
    return this.http.post<categoria>('https://arqsi-djj.azurewebsites.net/api/Categoria', categoria, httpOptions).pipe(
      tap((categoria: categoria) => this.log(`added categoria w/ id=${categoria.id}`)),
      catchError(this.handleError<categoria>('addCategoria'))
    );
  }

  deleteCategoria(categoria: categoria | number): Observable<categoria> {
    const id = typeof categoria === 'number' ? categoria : categoria.id;

    return this.http.delete<categoria>('https://arqsi-djj.azurewebsites.net/api/Categoria/'+id, httpOptions).pipe(
      tap(_ => this.log(`deleted categoria id=${id}`)),
      catchError(this.handleError<categoria>('deleteCategoria'))
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
