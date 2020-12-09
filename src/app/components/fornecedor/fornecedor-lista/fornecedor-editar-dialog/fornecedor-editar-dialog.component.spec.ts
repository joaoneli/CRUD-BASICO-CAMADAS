import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorEditarDialogComponent } from './fornecedor-editar-dialog.component';

describe('FornecedorEditarDialogComponent', () => {
  let component: FornecedorEditarDialogComponent;
  let fixture: ComponentFixture<FornecedorEditarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorEditarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorEditarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
