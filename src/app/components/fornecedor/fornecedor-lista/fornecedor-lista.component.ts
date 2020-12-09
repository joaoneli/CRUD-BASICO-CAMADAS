import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { YesNoDialogComponent } from '../../shared/yes-no-dialog/yes-no-dialog.component';
import { FornecedorEditarDialogComponent } from './fornecedor-editar-dialog/fornecedor-editar-dialog.component';

@Component({
  selector: 'app-fornecedor-lista',
  templateUrl: './fornecedor-lista.component.html',
  styleUrls: ['./fornecedor-lista.component.css']
})
export class FornecedorListaComponent implements OnInit {

  dataSource: Fornecedor[] = new Array<Fornecedor>();
  displayedColumns = ['id','nome','cnpj','endereco','telefone','acoes'];
  subscriptions: Subscription[];
  constructor(private fornecedorService : FornecedorService, public dialog: MatDialog) { 
    this.subscriptions = new Array<Subscription>();
    this.subscriptions.push(
      this.fornecedorService.deleteSuccess$.subscribe(() =>{
        this.BuscarTodos();
      }
    ));
    this.subscriptions.push(
      this.fornecedorService.updateSuccess$.subscribe(() =>{
        this.BuscarTodos();
      }
    ));

  }

  ngOnInit(): void {
    this.BuscarTodos();
  }
  BuscarTodos(){
    this.fornecedorService.getAll().subscribe(result=>{
      this.dataSource = result;
    });
  }
  Delete(id: number){
    this.fornecedorService.Delete(id);
  }
  Update(fornecedor: Fornecedor){
      this.fornecedorService.update(fornecedor);
  }
  openYesNoDialog(fornecedor: Fornecedor): void {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {title: `Excluir o fornecedor ${fornecedor.nome} !`, message: `Você deseja realmente excluir o fornecedor ${fornecedor.nome}?`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.Delete(fornecedor.id);
      }
    });
  }
  openEditDialog(fornecedor: Fornecedor){
    const dialogRef = this.dialog.open(FornecedorEditarDialogComponent, {
      data: fornecedor
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
