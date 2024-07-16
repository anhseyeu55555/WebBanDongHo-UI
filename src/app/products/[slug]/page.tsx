import { dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetail from "@/components/ui/Page/ProductDetailPage";

interface Props {
  params: { slug: string };
}

const Page = async (props: Props) => {
  const { params } = props;

  return (
    <div className="w-full h-full lg:pt-[235px] bg-gray-10">
      <ProductDetail />
    </div>
  );
};

export default Page;
