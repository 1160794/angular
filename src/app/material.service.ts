import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { material } from './material/material';
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
export class MaterialService {

  constructor(private http: HttpClient , private messageService: MessageService) { }


  getMateriais(): Observable<material[]> {
    return this.http.get<material[]>('https://arqsi-djj.azurewebsites.net/api/Material')
    .pipe(
      tap(_ => this.log('fetched materiais')),
      catchError(this.handleError('getMateriais', []))
    );
  }

  getMaterial(materialId) : Observable<material>{
    return this.http.get<material>('https://arqsi-djj.azurewebsites.net/api/Material/'+materialId).pipe(
      tap(_ => this.log(`fetched material id=${materialId}`)),
      catchError(this.handleError<material>(`getMaterial id=${materialId}`))
    );
  }

    /** PUT: update the material on the server */
    updateMaterial(material: material): Observable<any> {
      return this.http.put('https://arqsi-djj.azurewebsites.net/api/Material/'+material.id, material, httpOptions).pipe(
        tap<material>(updatedMaterial => console.log(`updated material = ${JSON.stringify(updatedMaterial)}`)),
        catchError(this.handleError<material>(`getMaterial materialId=${material.id}`))
      );
  }

  
  
  deleteMaterial(material: material | number): Observable<material> {
    const id = typeof material === 'number' ? material : material.id;

    return this.http.delete<material>('https://arqsi-djj.azurewebsites.net/api/Material/'+id, httpOptions).pipe(
      tap(_ => this.log(`deleted material id=${id}`)),
      catchError(this.handleError<material>('deleteMaterial'))
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
