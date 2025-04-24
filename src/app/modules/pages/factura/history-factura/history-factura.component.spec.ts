import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFacturaComponent } from './history-factura.component';

describe('HistoryFacturaComponent', () => {
  let component: HistoryFacturaComponent;
  let fixture: ComponentFixture<HistoryFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
