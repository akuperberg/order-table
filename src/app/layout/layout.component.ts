import { Component } from '@angular/core';
import { OrdersTableComponent } from '../orders-table/orders-table.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [OrdersTableComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
