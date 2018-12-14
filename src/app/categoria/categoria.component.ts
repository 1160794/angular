import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { categoria } from './categoria';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: categoria[];
  
  constructor(private data: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(): void {
    this.data.getCategorias()
      .subscribe(categorias => this.categorias = categorias);
  }

  delete(categoria: categoria): void {
    this.categorias = this.categorias.filter(h => h !== categoria);
    this.data.deleteCategoria(categoria).subscribe();
  }

}
