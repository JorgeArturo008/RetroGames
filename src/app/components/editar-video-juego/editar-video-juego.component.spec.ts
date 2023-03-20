import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVideoJuegoComponent } from './editar-video-juego.component';

describe('EditarVideoJuegoComponent', () => {
  let component: EditarVideoJuegoComponent;
  let fixture: ComponentFixture<EditarVideoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVideoJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVideoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
