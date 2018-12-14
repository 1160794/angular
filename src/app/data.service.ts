import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Produto } from './produto/produto';
import { ProdutoAdd } from './produto/produtoAdd';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient , private messageService: MessageService) { }

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>('https://arqsi-djj.azurewebsites.net/api/Produto').pipe(
      tap(_ => this.log('fetched produtos')),
      catchError(this.handleError('getProdutos', []))
    );
  }

  getProduto(produtoId) : Observable<Produto>{
    return this.http.get<Produto>('https://arqsi-djj.azurewebsites.net/api/Produto/'+produtoId).pipe(
      tap(_ => this.log(`fetched produto id=${produtoId}`)),
      catchError(this.handleError<Produto>(`getProduto id=${produtoId}`))
    );
  }

 



  createProduto(produto : Produto) {
    return this.http.post<Produto>('https://arqsi-djj.azurewebsites.net/api/Produto' , produto)
  }

  /** PUT: update the produto on the server */
  updateProduto(produto: Produto): Observable<any> {
    return this.http.put('https://arqsi-djj.azurewebsites.net/api/Produto/'+produto.id, produto, httpOptions).pipe(
      tap<Produto>(updatedProduto => console.log(`updated Produto = ${JSON.stringify(updatedProduto)}`)),
      catchError(this.handleError<Produto>(`getProduto produtoId=${produto.id}`))
    );
}

deleteProduto(produto: Produto | number): Observable<Produto> {
  const id = typeof produto === 'number' ? produto : produto.id;

  return this.http.delete<Produto>('https://arqsi-djj.azurewebsites.net/api/Produto/'+id, httpOptions).pipe(
    tap(_ => this.log(`deleted produto id=${id}`)),
    catchError(this.handleError<Produto>('deleteProduto'))
  );
} 

addProduto(produto: ProdutoAdd): Observable<Produto> {
  return this.http.post<Produto>('https://arqsi-djj.azurewebsites.net/api/Produto', produto, httpOptions).pipe(
    tap((produto: Produto) => this.log(`added produto w/ id=${produto.id}`)),
    catchError(this.handleError<Produto>('addProduto'))
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