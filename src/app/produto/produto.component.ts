import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Produto } from './produto';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.data.getProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }

  delete(produto: Produto): void {
    this.produtos = this.produtos.filter(h => h !== produto);
    this.data.deleteProduto(produto).subscribe();
  }

}

export class ButtonOverviewExample {}
