import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente: Cliente = new Cliente();
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  Salvar(){
       let erro = 0;
       if (this.cliente.nome == null){
         erro ++;
       }
       if (this.cliente.cpf == null){
        erro ++;
      }
       if (this.cliente.endereco == null){
        erro ++;
      }
       if (this.cliente.telefone == null){
        erro ++;
      }

       if (!erro){
        this.clienteService.insert(this.cliente).subscribe(success=>{
          this.cliente = new Cliente();
        }, error => {
            console.log(error.message);
        });
      }
  }
}
