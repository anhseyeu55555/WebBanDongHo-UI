"use client";

import { useSearchParams } from "next/navigation";

import { ListProduct } from "@/components/ui/ListProduct";

export default function SearchCategory() {
  const search = useSearchParams();
  const searchQuery = search.get("search");

  console.log(searchQuery?.replace(/ /g, "-"));

  return (
    <div className="w-full h-full pt-4 lg:pt-[235px] bg-gray-10">
      <ListProduct title="Tất cả các sản phẩm" listProducts={[]} />
    </div>
  );
}
