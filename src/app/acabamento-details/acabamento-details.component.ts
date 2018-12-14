import { Component, OnInit , Input} from '@angular/core';
import { AcabamentoService } from '../acabamento.service';
import { acabamento } from '../acabamento/acabamento';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { material } from '../material/material';

@Component({
  selector: 'app-acabamento-details',
  templateUrl: './acabamento-details.component.html',
  styleUrls: ['./acabamento-details.component.scss']
})
export class AcabamentoDetailsComponent implements OnInit {

  @Input()  acabamento: acabamento;
  
  constructor(private route: ActivatedRoute, private data: AcabamentoService) {   }
  
 
  ngOnInit() {
    this.getAcabamento();
  }


  add(descricao : string): void {
    
    
    descricao.trim();

    this.data.addAcabamento({ descricao } as acabamento).subscribe();
  }
  
  getAcabamento() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id>0){
    console.log(id);
    this.data.getAcabamento(id)
    .subscribe(acabamento => this.acabamento = acabamento);
  }
  }

  
  

  save(): void {
    this.data.updateAcabamento(this.acabamento).subscribe();
  }


}
