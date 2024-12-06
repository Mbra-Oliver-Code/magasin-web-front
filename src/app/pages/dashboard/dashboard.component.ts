import { Component } from '@angular/core';
import { StatCardItemComponent } from '../../../shared/stat-card-item/stat-card-item.component';
import {
  LucideAngularModule,
  ArrowRightToLine,
  ArrowRight,
  Bell,
  LogOut,
} from 'lucide-angular';
import { LastOrdersTableComponent } from '../../../shared/orders/last-orders-table/last-orders-table.component';
import { LastOrderItemComponent } from '../../../shared/orders/last-order-item/last-order-item.component';
@Component({
  selector: 'app-dashboard',
  imports: [
    StatCardItemComponent,
    LucideAngularModule,
    LastOrdersTableComponent,
    LastOrderItemComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less',
})
export class DashboardComponent {
  readonly arrowRightIcon = ArrowRight;
  readonly notification = Bell;
  readonly logout = LogOut;
}
