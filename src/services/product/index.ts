import axiosClient from "..";

export const ProductService = {
  getAllProduct: () => axiosClient.get("/sanpham"),
  getProductsByCategory: (category: string) =>
    axiosClient.get(`/sanpham/danhmuc/${category}`),
  getProductsByBrand: (brand: string) =>
    axiosClient.get(`/sanpham/thuonghieu/${brand}`),
  getProductsBySupplier: (supplier: string) =>
    axiosClient.get(`/sanpham/nhacungcap/${supplier}`),
  getDetailProduct: (slug: string) => axiosClient.get(`/sanpham/${slug}`),
  getProductsBySearch: (params: any) =>
    axiosClient.get(`/sanpham/search`, {
      params,
    }),
};
