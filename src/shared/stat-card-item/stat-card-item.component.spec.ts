import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardItemComponent } from './stat-card-item.component';

describe('StatCardItemComponent', () => {
  let component: StatCardItemComponent;
  let fixture: ComponentFixture<StatCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
