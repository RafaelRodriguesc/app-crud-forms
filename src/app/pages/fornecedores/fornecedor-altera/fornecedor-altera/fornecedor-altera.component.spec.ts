import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorAlteraComponent } from './fornecedor-altera.component';

describe('FornecedorAlteraComponent', () => {
  let component: FornecedorAlteraComponent;
  let fixture: ComponentFixture<FornecedorAlteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorAlteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
