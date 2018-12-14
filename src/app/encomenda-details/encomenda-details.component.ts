import { Component, OnInit , Input} from '@angular/core';
import { EncomendasService } from '../encomendas.service';
import { encomenda } from '../encomenda/encomenda';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-encomenda-details',
  templateUrl: './encomenda-details.component.html',
  styleUrls: ['./encomenda-details.component.scss']
})
export class EncomendaDetailsComponent implements OnInit {

  @Input()  encomenda: encomenda;

  constructor(private route: ActivatedRoute, private data: EncomendasService) {   }
  
 
  

  ngOnInit() {
    this.getEncomenda();
  }

  getEncomenda(): void {
    const id: string = this.route.snapshot.params.id;
    console.log(id);
    this.data.getEncomenda(id)
    .subscribe(encomenda => this.encomenda = encomenda);
  }

  

  save(): void {
    const id: string = this.route.snapshot.params.id;
    this.data.updateEncomenda(this.encomenda,id).subscribe();
  }

  

}
