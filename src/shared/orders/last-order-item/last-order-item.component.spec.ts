import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOrderItemComponent } from './last-order-item.component';

describe('LastOrderItemComponent', () => {
  let component: LastOrderItemComponent;
  let fixture: ComponentFixture<LastOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastOrderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
