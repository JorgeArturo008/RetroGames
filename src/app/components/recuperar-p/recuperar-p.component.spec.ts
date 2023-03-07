import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarPComponent } from './recuperar-p.component';

describe('RecuperarPComponent', () => {
  let component: RecuperarPComponent;
  let fixture: ComponentFixture<RecuperarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
