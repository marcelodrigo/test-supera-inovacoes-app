import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoDto } from '../../dto/produto-dto';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

  @Input() idProduto?: number;
  @Input() desabilitarCampos: boolean;

  @Output() clienteEmitter = new EventEmitter();

  produto: ProdutoDto;

  constructor(private produtoService: ProdutoService) {
    this.produto = new ProdutoDto();
    this.desabilitarCampos = false;
  }

  ngOnInit(): void {
    this.carregarDadosProduto(this.idProduto);
  }

  carregarDadosProduto(idProduto?: number) {
    if (idProduto && idProduto > 0) {
      this.produtoService.obterProduto(idProduto).subscribe((produto) => {
        this.produto = produto;
        this.emitModelChanged();
      });
    }
    else {
      this.produto = new ProdutoDto();
      this.emitModelChanged();
    }
  }

  emitModelChanged() {
    this.clienteEmitter.emit(this.produto);
  }

}