import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteValidantion } from '../../shared/validations/model/cliente-validantion';
import { Validations } from '../../shared/validations/validations';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente: Cliente = new Cliente();
  validation: ClienteValidantion = new ClienteValidantion();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  Salvar(){
    this.validation = Validations.ClienteValidation(this.cliente);
    if (!this.validation.isError){
      this.clienteService.insert(this.cliente).subscribe(success => {
        this.cliente = new Cliente();
      }, error => {
          console.log(error.message);
      });
    }
  }
}
