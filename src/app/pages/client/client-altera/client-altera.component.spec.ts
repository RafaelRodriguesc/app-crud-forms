import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAlteraComponent } from './client-altera.component';

describe('ClientAlteraComponent', () => {
  let component: ClientAlteraComponent;
  let fixture: ComponentFixture<ClientAlteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAlteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
