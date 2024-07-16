import axiosClient from "..";

export const ProductService = {
  getAllProduct: () => axiosClient.get("/sanpham"),
  getDetailProduct: (slug: string) => axiosClient.get(`/sanpham/${slug}`),
};
