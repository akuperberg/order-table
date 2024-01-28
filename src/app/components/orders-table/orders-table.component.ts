import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IOrder } from "../../interfaces/IOrder";
import { ordersData } from "../../data/orderData";

@Component({
  selector: "app-orders-table",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./orders-table.component.html",
  styleUrl: "./orders-table.component.scss",
})
export class OrdersTableComponent {
  public isActive = true;
  public isPending = true;
  public isWaiting = true;
  public ordersData = ordersData;
  public filteredData: IOrder[]  = [];

  ngOnInit() {
    this.filterData();
  }


  public filterData() {
    this.filteredData = this.ordersData.filter(order =>
      (this.isActive && order.status === 'Active') ||
      (this.isPending && order.status === 'Pending Approval') ||
      (this.isWaiting && order.status === 'Waiting Compensation')
    );
  }
}
