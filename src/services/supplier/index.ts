import axiosClient from "..";

export const supplierService = {
  getAllSupplier: () => axiosClient.get("/nhacungcap"),
};
