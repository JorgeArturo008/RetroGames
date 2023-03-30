import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVideoJuegoVerticalComponent } from './lista-video-juego-vertical.component';

describe('ListaVideoJuegoVerticalComponent', () => {
  let component: ListaVideoJuegoVerticalComponent;
  let fixture: ComponentFixture<ListaVideoJuegoVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVideoJuegoVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVideoJuegoVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
