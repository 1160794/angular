import { Component, OnInit , Input} from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoAdd } from '../produto/produtoAdd';
import { material } from '../material/material';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { acabamento } from '../acabamento/acabamento';
import { produtosAgregados } from '../produto/produtoAgregado';


@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss']
})
export class ProdutoDetailsComponent implements OnInit {

  @Input()  produto: Produto;

  constructor(private route: ActivatedRoute, private data: DataService) {   }
  
  getProduto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id>0){
    console.log(id);
    this.data.getProduto(id)
    .subscribe(produto => this.produto = produto);
    }
  }

  ngOnInit() {
    this.getProduto();
    
  }

  save(): void {
    this.data.updateProduto(this.produto).subscribe();
  }

   add(nome : string, categoria: string, altura: string,
    largura: string, comprimento: string,
    MaxOcupacao: string,MinOcupacao: string, Materiais: string , proAgre: string): void {
    
      Materiais.trim();
      proAgre.trim();
      categoria.trim();
      nome.trim();
      altura.trim();
      largura.trim();
      comprimento.trim();
      MaxOcupacao.trim();
      MinOcupacao.trim();
    
    var maxOcupacao: number = +MaxOcupacao;
    var minOcupacao: number= +MinOcupacao;
    var material:       material[];

    /*var listString1 = Materiais.split('/');
    
    for(let mataca in listString1){
      var listString2 = mataca.split('-');
      var mat : material;
      var aca : acabamento;
      for(var i=0 ; i < listString2.length;i++){
        if(i==0){
          mat.nome=listString2[i];
        }else{
          aca.descricao=listString2[i];
          mat.acabamento.push(    aca    );
        }

      
      }
      material.push(mat);
    }
    var listProd1 = proAgre.split('/');
    var produtosAgregados : produtosAgregados[];
    for(let produtAgre in listProd1){
      var listProd2 = produtAgre.split('-');
      
       
          var produtoAgregado : produtosAgregados;
          produtoAgregado.nome=listProd2[0];
          produtoAgregado.agregadoTF=listProd2[1];
          
          
          produtosAgregados.push(    produtoAgregado    );
        
    }*/

    this.data.addProduto( {nome , categoria , altura ,  largura , comprimento, maxOcupacao, minOcupacao } as ProdutoAdd).subscribe();

    
  }



}
