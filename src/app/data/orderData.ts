import { IOrder } from "../interfaces/IOrder";

export const ordersData: IOrder[] = [
    {
      status: "Active",
      supplierName: "Jakub Zavazal",
      month: "March",
      phase: "Deployment",
      internalOrder:  10024234,
      amount: 5120
    },
    {
      status: "Active",
      supplierName: "Jonathan Holden",
      month: "April",
      phase: "Research",
      internalOrder: 10024299,
      amount: 6820
    },
    {
      status: "Pending Approval",
      supplierName: "Miguel Zavala",
      month: "March",
      phase: "Deployment",
      internalOrder: 110023211,
      amount: 4400
    },
    {
      status: "Pending Approval",
      supplierName: "Vlad Titus Tudor",
      month: "February",
      phase: "Development",
      internalOrder:  10024567,
      amount: 3320
    },
    {
      status: "Waiting Compensation",
      supplierName: "Aleksey Romanyuk",
      month: "February",
      phase: "Development",
      internalOrder: 10024023,
      amount: 5120
    },
    {
      status: "Waiting Compensation",
      supplierName: "Carlos Francisco Rocha Ceballos",
      month: "April",
      phase: "Research",
      internalOrder: 10039493,
      amount: 5300
    }
  ];