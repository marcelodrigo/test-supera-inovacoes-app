import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdutoDto } from '../../dto/produto-dto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  idProduto: number;
  produto: ProdutoDto;

  constructor(private produtoService: ProdutoService,
    private location: Location,
    private activatedRoute: ActivatedRoute) { 
      this.idProduto = 0;
      this.produto = new ProdutoDto();
    }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idProduto = params['idProduto'];
    });
  }

  getProduto($event: ProdutoDto){
    this.produto = $event as ProdutoDto;
  }

  onClickEditar() {
    this.produtoService.atualizarProduto(this.produto).subscribe((response) => {
      this.onClickVoltar();
    });
  }

  onClickVoltar() {
    this.location.back();
  }

}
