import { Component, OnInit , Input} from '@angular/core';
import { MaterialService } from '../material.service';
import { material } from '../material/material';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.scss']
})
export class MaterialDetailsComponent implements OnInit {

  @Input()  material: material;

  constructor(private route: ActivatedRoute, private data: MaterialService) {   }
  
 
  

  ngOnInit() {
    this.getMaterial();
  }

  getMaterial(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.data.getMaterial(id)
    .subscribe(material => this.material = material);
  }

  

  save(): void {
    this.data.updateMaterial(this.material).subscribe();
  }

  

}
