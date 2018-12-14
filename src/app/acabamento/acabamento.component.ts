import { Component, OnInit } from '@angular/core';
import { AcabamentoService } from '../acabamento.service';
import { acabamento } from './acabamento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acabamento',
  templateUrl: './acabamento.component.html',
  styleUrls: ['./acabamento.component.scss']
})
export class AcabamentoComponent implements OnInit {

  acabamentos: acabamento[];
  
  constructor(private data: AcabamentoService) { }

  ngOnInit() {
    this.getAcabamentos();
  }

  getAcabamentos(): void {
    this.data.getAcabamentos()
      .subscribe(acabamentos => this.acabamentos = acabamentos);
  }

  delete(acabamento: acabamento): void {
    this.acabamentos = this.acabamentos.filter(h => h !== acabamento);
    this.data.deleteAcabamento(acabamento).subscribe();
  }

}
