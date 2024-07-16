"use client";

import clsx from "clsx";
import Link from "next/link";

import { ConvertPrice } from "@/helpers/convert";
import { ProductType } from "@/types/product";

import { ImageCustom } from "../ImageCustom";

interface Props {
  product: ProductType;
  styleImageProduct?: string;
  styleWrapperProduct?: string;
  heightImage: number;
  widthImage: number;
}

export const ProductItem = (props: Props) => {
  const {
    heightImage,
    product,
    widthImage,
    styleImageProduct,
    styleWrapperProduct,
  } = props;
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-full border-gray-20 rounded-lg bg-white border-[1px] border-solid",
      )}
    >
      <div
        className={`${styleWrapperProduct} flex flex-col justify-center gap-4`}
      >
        <div className={`h-full w-full ${styleImageProduct} relative`}>
          <Link href={`/products/${product.slug}`}>
            <ImageCustom
              src={product.image}
              alt={"Product"}
              height={heightImage}
              width={widthImage}
              className="w-full h-auto rounded-tr-[7px] rounded-tl-[7px]"
            />
          </Link>
        </div>

        <div className="w-full flex flex-col justify-center gap-2 p-4">
          <Link
            href={`/products/${product.slug}`}
            className="text-md font-bold line-clamp-2 min-h-[48px]"
          >
            {product.tensp}
          </Link>

          <Link href={`/products/${product.slug}`}>
            <div className="flex flex-row justify-between items-center flex-wrap">
              {ConvertPrice(product.dongia)}
            </div>
          </Link>

          <div className="flex justify-center lg:justify-end">
            <button
              className="bg-primary px-4 py-2 rounded-lg text-white text-base font-medium"
              onClick={() => {
                console.log("abc");
              }}
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
