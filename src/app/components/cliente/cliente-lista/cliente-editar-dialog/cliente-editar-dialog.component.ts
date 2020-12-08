import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-editar-dialog',
  templateUrl: './cliente-editar-dialog.component.html',
  styleUrls: ['./cliente-editar-dialog.component.css']
})
export class ClienteEditarDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClienteEditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
