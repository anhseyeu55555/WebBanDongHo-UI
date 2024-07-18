import Link from "next/link";

import { ImageCustom } from "@/components/ui/ImageCustom";
import { ConvertPrice } from "@/helpers/convert";
import { CartType } from "@/types/cart";

import { TrashIcon } from "../../../../../../public/icons";
import { Checkbox } from ".";
import { CountQuantityProduct } from "./CountQuantityProduct";

interface Props {
  item: CartType;
  listChecked: string[];
  handleCheckedItem: (item: CartType) => void;
}

const styleTextItem = "font-medium text-base text-[#242424]";

export const ItemProductCheckout = (props: Props) => {
  const { handleCheckedItem, item, listChecked } = props;
  return (
    <div
      className="flex lg:flex-row flex-col lg:items-center gap-2 lg:gap-12"
      key={`${item.id.makh}-${item.id.masp}`}
    >
      <div className="w-full lg:w-[46.75%] flex gap-2 items-center">
        <div
          className={`${
            item.sanpham.soluong > 0 ? "cursor-pointer" : "cursor-not-allowed"
          } `}
          onClick={() => handleCheckedItem(item)}
        >
          {/* {checked.includes(item.id) ? (
            <CheckedBoxIcon />
          ) : (
            <Checkbox />
          )} */}
          <Checkbox />
        </div>

        <div className="flex items-center gap-2 w-full">
          <div className="min-w-[70px] h-full">
            <Link href={`/products/${item.sanpham.slug}`}>
              <ImageCustom
                height={70}
                width={70}
                alt={item.sanpham.tensp}
                src={item.sanpham.image[0]}
                className="h-auto w-[70px] aspect-square rounded-lg object-cover object-center"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-1">
              <Link href={`/products/${item.sanpham.slug}`}>
                <p
                  className={`line-clamp-2 ${styleTextItem} ${
                    item.sanpham.soluong > 0 ? "" : "line-through"
                  }`}
                >
                  {item.sanpham.tensp}
                </p>
              </Link>

              {item.sanpham.soluong === 0 && (
                <p className="font-medium text-base text-red-60">
                  Sản phẩm hết hàng
                </p>
              )}
            </div>

            <div className="block lg:hidden">
              <div className="flex justify-between items-center">
                <p className={`${styleTextItem}`}>
                  {ConvertPrice(item.sanpham.dongia || 0)}
                </p>

                <div className="lg:hidden block">
                  <CountQuantityProduct item={item} isTrigger={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-[10%] lg:block hidden gap-2 ${styleTextItem}`}>
        {ConvertPrice(item.sanpham.dongia)}
      </div>

      <div className="w-[10%] lg:block hidden">
        <CountQuantityProduct item={item} isTrigger={true} />
      </div>

      <div
        className={`${styleTextItem} text-primary w-[12%] lg:px-0 px-[26px]  whitespace-nowrap`}
      >
        {ConvertPrice(100000)}
      </div>

      <div
        className="lg:block hidden"
        onClick={() => {
          console.log("handle remove item cart");
        }}
      >
        <div className="flex flex-1 cursor-pointer">
          <TrashIcon />
        </div>
      </div>
    </div>
  );
};
