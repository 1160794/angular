import { Component, OnInit , Input} from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { categoria } from '../categoria/categoria';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html',
  styleUrls: ['./categoria-details.component.scss']
})
export class CategoriaDetailsComponent implements OnInit {

  @Input()  categoria: categoria;

  
  constructor(private route: ActivatedRoute, private data: CategoriaService) {   }
  
 
  ngOnInit() {
    this.getCategoria();
  }

  getCategoria() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id>0){
    console.log(id);
    this.data.getCategoria(id)
    .subscribe(categoria => this.categoria = categoria);
    }
  }


  add(descricao : string): void {
    
    descricao.trim();

    this.data.addCategoria({ descricao } as categoria).subscribe();
  }

  save(): void {
    this.data.updateCategoria(this.categoria).subscribe();
  }

}
