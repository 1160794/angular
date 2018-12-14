import { Component, OnInit } from '@angular/core';
import { EncomendasService } from '../encomendas.service';
import { encomenda } from './encomenda';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-encomenda',
  templateUrl: './encomenda.component.html',
  styleUrls: ['./encomenda.component.scss']
})
export class EncomendaComponent implements OnInit {

  encomendas: encomenda[];
  
  constructor(private data: EncomendasService) { }

  ngOnInit() {
    this.getEncomendas();
  }

  getEncomendas(): void {
    this.data.getEncomendas()
      .subscribe(encomendas => this.encomendas = encomendas);
  }

  delete(encomenda: encomenda): void {
    this.encomendas = this.encomendas.filter(h => h !== encomenda);
    this.data.deleteEncomenda(encomenda).subscribe();
  }

}
