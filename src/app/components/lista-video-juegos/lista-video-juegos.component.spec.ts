import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVideoJuegosComponent } from './lista-video-juegos.component';

describe('ListaVideoJuegosComponent', () => {
  let component: ListaVideoJuegosComponent;
  let fixture: ComponentFixture<ListaVideoJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVideoJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVideoJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
