import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProdutoDto } from '../../dto/produto-dto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: ProdutoDto;

  constructor(private produtoService: ProdutoService,
    private location: Location) {
    this.produto = new ProdutoDto();
  }

  ngOnInit(): void {
  }

  getProduto($event: ProdutoDto) {
    this.produto = $event as ProdutoDto;
  }

  onClickCriar() {
    this.produtoService.criarProduto(this.produto).subscribe((response) => {
      this.onClickVoltar();
    });
  }

  onClickVoltar() {
    this.location.back();
  }

}
