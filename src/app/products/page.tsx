import { ListProduct } from "@/components/ui/ListProduct";

export default async function Products() {
  return (
    <div className="w-full h-full pt-4 lg:pt-[235px] bg-gray-10">
      <ListProduct title="Tất cả các sản phẩm" listProducts={[]} />
    </div>
  );
}
