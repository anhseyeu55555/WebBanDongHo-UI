"use client";

import { PageWrapper } from "../PageWrapper";
import { ProductItem } from "../ProductItem";

interface Props {
  products: any[];
  title: string;
}

export const SectionProduct = (props: Props) => {
  const { products, title } = props;

  return (
    <PageWrapper backgroundColor="bg-white">
      <div className="py-12 lg:py-20 flex flex-col justify-center lg:gap-10 gap-6">
        <h1 className="text-center">{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 lg:px-0 px-4">
          <ProductItem
            styleWrapperProduct="w-full"
            heightImage={840}
            widthImage={840}
          />
          <ProductItem
            styleWrapperProduct="w-full"
            heightImage={840}
            widthImage={840}
          />
          <ProductItem
            styleWrapperProduct="w-full"
            heightImage={840}
            widthImage={840}
          />
        </div>
      </div>
    </PageWrapper>
  );
};
