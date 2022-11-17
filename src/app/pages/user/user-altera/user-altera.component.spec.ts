import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlteraComponent } from './user-altera.component';

describe('UserAlteraComponent', () => {
  let component: UserAlteraComponent;
  let fixture: ComponentFixture<UserAlteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAlteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
