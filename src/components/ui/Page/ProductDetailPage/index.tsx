"use client";

import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import { PageWrapper } from "../../PageWrapper";
import { ProductDetailLeft } from "./ProductDetailLeft";
import { ProductDetailRight } from "./ProductDetailRight";

const ProductDetail = () => {
  //   const { slug } = useParams();
  //   const { status } = useSession();
  //   const isAuthenticated = handleIsAuthenticated(status);

  //   const { data: dataProductDetail } = useQueryGetProductDetail(slug);

  return (
    // <ShoppingContextProvider>
    <div>
      <PageWrapper style="py-10 bg-white">
        <div className="flex lg:flex-row flex-col justify-between w-full h-full gap-10">
          <div className="w-full">
            <ProductDetailLeft />
          </div>
          <div className="w-full">
            <ProductDetailRight />
          </div>
        </div>
      </PageWrapper>
    </div>
    // </ShoppingContextProvider>
  );
};

export default ProductDetail;
