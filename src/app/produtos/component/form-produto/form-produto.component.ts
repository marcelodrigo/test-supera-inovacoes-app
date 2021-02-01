import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoDto } from '../../dto/produto-dto';
import { environment } from 'src/environments/environment';
import { ViewChild } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

  @ViewChild('inputImagem') inputImagem!: ElementRef;
  @Input() idProduto?: number;
  @Input() desabilitarCampos: boolean;

  @Output() clienteEmitter = new EventEmitter();

  produto: ProdutoDto;

  constructor(private produtoService: ProdutoService, private alertService: AlertService) {
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

  fileChangeEvent(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      let file = fileList.item(0);
      if (file && file.size < environment.maxFileSizeBytes) {
        this.alertService.clear();
        const reader = new FileReader();
        reader.readAsDataURL(file as Blob);
        reader.onload = () => {
          this.produto.Imagem = reader.result as string;
        };
      }
      else {
        let _kbMessage = environment.maxFileSizeBytes / 1000;
        this.alertService.error(`Arquivo maior que o permitido ${_kbMessage} KB!`);
        this.inputImagem.nativeElement.value = "";
        this.produto.Imagem = null;
      }
    }
  }

  emitModelChanged() {
    this.clienteEmitter.emit(this.produto);
  }

}