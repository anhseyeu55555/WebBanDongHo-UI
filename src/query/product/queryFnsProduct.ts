import { ProductService } from "@/services/product";

export const getAllProductQueryFn = async () => {
  const { data } = await ProductService.getAllProduct();

  return data;
};

export const getDetailProductQueryFn = async (slug: string) => {
  const { data } = await ProductService.getDetailProduct(slug);

  return data;
};
