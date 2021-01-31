import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FiltroConsultaListaProdutoDto } from '../dto/filtro-consulta-lista-produto-dto';
import { ProdutoDto } from '../dto/produto-dto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filtrosConsulta: FiltroConsultaListaProdutoDto;

  produtos: ProdutoDto[];

  constructor(private produtoService: ProdutoService) {
    this.filtrosConsulta = new FiltroConsultaListaProdutoDto();

    this.produtos = [];
  }

  ngOnInit(): void {
    this.onPesquisarProduto();
  }

  onPesquisarProduto() {
    this.produtoService.consultarProdutos(this.filtrosConsulta).subscribe(response => {
      this.produtos = response;
    });
  }

  onClickRemoverProduto(idProduto: number) {
    this.produtoService.removerProduto(idProduto).subscribe((response) => {
          this.onPesquisarProduto();
    });
  }

  onClickEditarProduto(idProduto: number) {
    this.produtoService.abrirPaginaEdicaoProduto(idProduto);
  }

  onClickCriarProduto() {
    this.produtoService.abrirPaginaCriacaoProduto();
  }

}
