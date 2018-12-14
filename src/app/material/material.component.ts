import { Component, OnInit , Input} from '@angular/core';
import { MaterialService } from '../material.service';
import { material } from './material';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  materiais: material[];

  constructor(private route: ActivatedRoute, private data: MaterialService) {   }
  
 
  ngOnInit() {
    this.getMateriais();
  }

  getMateriais(): void {
    this.data.getMateriais()
      .subscribe(materiais => this.materiais = materiais);
  }

  delete(material: material): void {
    this.materiais = this.materiais.filter(h => h !== material);
    this.data.deleteMaterial(material).subscribe();
  }



}
