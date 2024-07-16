import { useQuery } from "@tanstack/react-query";

import { ProductType } from "@/types/product";

import {
  getAllProductQueryFn,
  getDetailProductQueryFn,
} from "./queryFnsProduct";
import { QueryKeysProduct } from "./queryKeysProduct";

const initialProductList: ProductType[] = [];

const initialProductDetail: ProductType = {
  masp: "",
  tensp: "",
  slug: "",
  soluong: 0,
  dongia: 0,
  chitietSP: "",
  image: "",
  image2: "",
  image3: "",
  trangthai: 0,
  thuonghieu: {
    math: "",
    tenth: "",
    slug: "",
  },
  danhmuc: {
    madm: "",
    tendm: "",
    slug: "",
  },
  nhacungcap: {
    mancc: "",
    tenncc: "",
    sdt: "",
    email: "",
    diachi: "",
    slug: "",
  },
};

export const useQueryGetAllProduct = () =>
  useQuery<ProductType[]>({
    queryKey: [QueryKeysProduct.GET_ALL_PRODUCT],
    queryFn: () => getAllProductQueryFn(),
    placeholderData: initialProductList,
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });

export const useQueryGetProductDetail = (slug: string) =>
  useQuery<ProductType>({
    queryKey: [QueryKeysProduct.GET_DETAIL_PRODUCT, slug],
    queryFn: () => getDetailProductQueryFn(slug),
    placeholderData: initialProductDetail,
  });