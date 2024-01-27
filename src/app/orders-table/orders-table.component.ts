import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [FiltersComponent],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss'
})
export class OrdersTableComponent {

}
