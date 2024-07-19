import { Dialog } from "@headlessui/react";
import Link from "next/link";

import { ButtonCustom } from "@/components/form/ButtonCustom";
import Divider from "@/components/ui/Divider";
import { ImageCustom } from "@/components/ui/ImageCustom";
import { Loading } from "@/components/ui/Loading";
import { ConvertPrice } from "@/helpers/convert";
import { useQueryGetDetailOrder } from "@/query/order/queryHooksOrder";
import { OrderDetailType, OrderType } from "@/types/order";

import { ModalWrapper } from "../../ModalWrapper";

interface Props {
  isOpenModal: boolean;
  handleCloseModal: () => void;
  selectOrder: OrderType;
}

const styleTextItem = "font-medium text-base text-[#242424]";

export const ModalOrderDetail = (props: Props) => {
  const { isOpenModal, handleCloseModal, selectOrder } = props;

  const { data: orderDetail, isFetching } = useQueryGetDetailOrder(
    selectOrder.madh,
  );

  const finalPrice = () => {
    if (!orderDetail) return 0;

    return orderDetail.reduce(
      (acc, el) => acc + el.soluong * el.sanpham.dongia,
      0,
    );
  };

  const renderContent = () => {
    if (isFetching || !orderDetail) {
      return <Loading isCenter height="h-[300px]" />;
    }

    return (
      <div className="my-6 flex flex-col gap-4">
        <div>
          <p className="text-md font-bold tracking-wide">
            Mã đơn hàng: <span>{selectOrder.madh || ""}</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-md font-bold tracking-wide">Thông tin giao hàng</p>

          <div className="pl-4">
            <p className="pb-2 text-md ">
              Họ tên: <span>{selectOrder.hoTen}</span>
            </p>
            <p className="pb-2 text-md ">
              Email: <span>{selectOrder.email}</span>
            </p>
            <p className="pb-2 text-md ">
              Số điện thoại: <span>{selectOrder.sdt}</span>
            </p>
            <p className="pb-2 text-md ">
              Địa chỉ: <span>{selectOrder.diaChi}</span>
            </p>
            <p className="pb-2 text-md ">
              Ghi chú: <span>{selectOrder.ghichu}</span>
            </p>
          </div>
        </div>

        <div className="bg-white w-full h-full rounded-[4px]">
          <div className="px-4">
            {orderDetail.map((item: OrderDetailType, index: number) => (
              <div
                key={`${item.id.makh}-${item.id.masp}`}
                className="flex flex-col gap-4 my-3"
              >
                <div className="flex items-center gap-2 w-full">
                  <div className="min-w-[70px] h-full">
                    <Link href={`/products/${item.sanpham.slug}`}>
                      <ImageCustom
                        height={70}
                        width={70}
                        alt={item.sanpham.tensp}
                        src={item.sanpham.image}
                        className="h-auto w-[70px] aspect-square rounded-lg object-cover object-center"
                      />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-1">
                      <Link href={`/products/${item.sanpham.slug}`}>
                        <p className={`line-clamp-2 ${styleTextItem} `}>
                          {item.sanpham.tensp} - x{item.soluong}
                        </p>
                      </Link>

                      <p>{ConvertPrice(item.sanpham.dongia)}</p>
                    </div>
                  </div>
                </div>
                {index !== orderDetail.length - 1 ? (
                  <Divider className="!my-0" />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          Tổng tiền thanh toán: {ConvertPrice(finalPrice())}
        </div>

        <ButtonCustom
          title="Xác nhận"
          variant="contained"
          size="large"
          style="ease-in duration-200 hover:scale-105"
        />
      </div>
    );
  };
  return (
    <>
      <ModalWrapper
        handleCloseModal={handleCloseModal}
        isOpenModal={isOpenModal}
        header={
          <>
            <Dialog.Title
              as="p"
              className="text-3xl lg:text-4xl font-bold text-black mb-2 text-center"
            >
              Chi tiết đơn hàng
            </Dialog.Title>

            <Dialog.Description
              as={"p"}
              className={"font-normal text-black text-center"}
            >
              Tất cả các thông tin chi tiết của đơn hàng
            </Dialog.Description>

            <Divider />
          </>
        }
        body={<>{renderContent()}</>}
        footer={<></>}
      />
    </>
  );
};
