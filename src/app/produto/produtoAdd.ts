import { material } from '../material/material';
import { produtosAgregados } from '../produto/produtoAgregado';


export class ProdutoAdd {
    
    nome:   string;
    categoria:  string;
    altura:     string;
    comprimento:    string;
    largura:        string;
    material:       material[];
    minOcupacao:       number;
    maxOcupacao:       number;
    produtosAgregados:       produtosAgregados[];
}