import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltroConsultaListaProdutoDto } from '../dto/filtro-consulta-lista-produto-dto';
import { ProdutoDto } from '../dto/produto-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient, private router: Router) { }

  abrirPaginaEdicaoProduto(idProduto: number) {
    this.router.navigateByUrl(`produtos/atualizacao?idProduto=${idProduto}`);
  }

  abrirPaginaCriacaoProduto() {
    this.router.navigateByUrl('produtos/criacao');
  }

  criarProduto(produto: ProdutoDto): Observable<ProdutoDto> {
    return this.http
      .post<ProdutoDto>(`produto`, produto);
  }

  atualizarProduto(produto: ProdutoDto): Observable<ProdutoDto> {
    return this.http
      .put<ProdutoDto>(`produto`, produto);
  }

  obterProduto(idProduto: number): Observable<ProdutoDto> {
    return this.http
      .get<ProdutoDto>(`produto/${idProduto}`);
  }

  removerProduto(idProduto: number): Observable<ProdutoDto> {
    return this.http
      .delete<ProdutoDto>(`produto/${idProduto}`);
  }

  consultarProdutos(filtroProduto: FiltroConsultaListaProdutoDto): Observable<ProdutoDto[]> {
    let _params = new HttpParams();
    if (filtroProduto.Nome) {
      _params = _params.append('nome', filtroProduto.Nome);
    }
    if (filtroProduto.Valor) {
      _params = _params.append('valor', filtroProduto.Valor.toString());
    }

    return this.http
      .get<ProdutoDto[]>('produtos', { params: _params });
  }

}