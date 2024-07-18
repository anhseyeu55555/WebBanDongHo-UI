import axiosClient from "..";

export const ProductService = {
  getAllProduct: () => axiosClient.get("/sanpham"),
  getProductsByCategory: (category: string) =>
    axiosClient.get(`/sanpham/danhmuc/{${category}}`),
  getProductsByBrand: (brand: string) =>
    axiosClient.get(`/sanpham/brand/${brand}`),
  getProductsBySupplier: (supplier: string) =>
    axiosClient.get(`/sanpham/supplier/${supplier}`),
  getDetailProduct: (slug: string) => axiosClient.get(`/sanpham/${slug}`),
};
