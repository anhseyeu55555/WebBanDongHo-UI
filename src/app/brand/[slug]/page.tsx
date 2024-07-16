import { ListProduct } from "@/components/ui/ListProduct";

export default async function Brand() {
  return (
    <div className="w-full h-full pt-4 lg:pt-[235px] bg-gray-10">
      <ListProduct title="Các sản phẩm của GIANT" listProducts={[]} />
    </div>
  );
}
