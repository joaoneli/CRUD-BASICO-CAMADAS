import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { FornecedorValidantion } from '../../shared/validations/model/fornecedor-validantion';
import { Validations } from '../../shared/validations/validations';

@Component({
  selector: 'app-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html',
  styleUrls: ['./fornecedor-cadastro.component.css']
})
export class FornecedorCadastroComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor();
  validation: FornecedorValidantion = new FornecedorValidantion();

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
  }

  Salvar(){
    this.validation = Validations.FornecedorValidation(this.fornecedor);
    if (!this.validation.isError){
      this.fornecedorService.insert(this.fornecedor).subscribe(success => {
        this.fornecedor = new Fornecedor();
        }, error => {
          console.log(error.message);
      });
    }
}
}
