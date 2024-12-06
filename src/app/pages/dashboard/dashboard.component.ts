import { Component } from '@angular/core';
import { StatCardItemComponent } from '../../../shared/stat-card-item/stat-card-item.component';

@Component({
  selector: 'app-dashboard',
  imports: [StatCardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less',
})
export class DashboardComponent {}
