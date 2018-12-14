import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcabamentoDetailsComponent } from './acabamento-details.component';

describe('AcabamentoDetailsComponent', () => {
  let component: AcabamentoDetailsComponent;
  let fixture: ComponentFixture<AcabamentoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcabamentoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcabamentoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
