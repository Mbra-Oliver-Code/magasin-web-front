import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOrdersTableComponent } from './last-orders-table.component';

describe('LastOrdersTableComponent', () => {
  let component: LastOrdersTableComponent;
  let fixture: ComponentFixture<LastOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastOrdersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
