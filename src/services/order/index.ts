import { OrderType } from "@/types/order";

import axiosClient from "..";

export const orderService = {
  addOrder: (formData: OrderType) =>
    axiosClient.post(`/donhang/user`, formData),
};
