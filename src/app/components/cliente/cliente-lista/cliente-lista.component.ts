import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { YesNoDialogComponent } from '../../shared/yes-no-dialog/yes-no-dialog.component';
import { ClienteEditarDialogComponent } from './cliente-editar-dialog/cliente-editar-dialog.component';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  dataSource: Cliente[] = new Array<Cliente>();
  displayedColumns = ['id','nome','cpf','endereco','telefone','acoes'];
  subscriptions: Subscription[];
  constructor(private clienteService : ClienteService, public dialog: MatDialog) { 
    this.subscriptions = new Array<Subscription>();
    this.subscriptions.push(
      this.clienteService.deleteSuccess$.subscribe(() =>{
        this.BuscarTodos();
      }
    ));
    this.subscriptions.push(
      this.clienteService.updateSuccess$.subscribe(() =>{
        this.BuscarTodos();
      }
    ));

  }

  ngOnInit(): void {
    this.BuscarTodos();
  }

  BuscarTodos(){
    this.clienteService.getAll().subscribe(result=>{
      this.dataSource = result;
    });
  }
  Delete(id: number){
    this.clienteService.Delete(id);
  }
  Update(cliente: Cliente){
      this.clienteService.update(cliente);
  }
  openYesNoDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {title: `Excluir o cliente ${cliente.nome} !`, message: `Você deseja realmente excluir o cliente ${cliente.nome}?`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.Delete(cliente.id);
      }
    });
  }
  openEditDialog(cliente: Cliente){
    const dialogRef = this.dialog.open(ClienteEditarDialogComponent, {
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.Update(result);
      }else{
        this.BuscarTodos();
      }
    });
  }

}
