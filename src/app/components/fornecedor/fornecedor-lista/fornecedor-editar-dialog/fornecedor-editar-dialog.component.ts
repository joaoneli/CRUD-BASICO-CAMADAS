import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fornecedor } from 'src/app/models/fornecedor';

@Component({
  selector: 'app-fornecedor-editar-dialog',
  templateUrl: './fornecedor-editar-dialog.component.html',
  styleUrls: ['./fornecedor-editar-dialog.component.css']
})
export class FornecedorEditarDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FornecedorEditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fornecedor) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
