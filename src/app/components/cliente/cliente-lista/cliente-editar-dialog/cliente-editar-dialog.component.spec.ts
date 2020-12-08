import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditarDialogComponent } from './cliente-editar-dialog.component';

describe('ClienteEditarDialogComponent', () => {
  let component: ClienteEditarDialogComponent;
  let fixture: ComponentFixture<ClienteEditarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
