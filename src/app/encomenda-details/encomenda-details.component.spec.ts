import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaDetailsComponent } from './encomenda-details.component';

describe('EncomendaDetailsComponent', () => {
  let component: EncomendaDetailsComponent;
  let fixture: ComponentFixture<EncomendaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
