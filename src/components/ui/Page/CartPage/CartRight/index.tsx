"use client";

import { Dispatch, SetStateAction } from "react";

import { ShippingType } from "@/types/profile";

import { AddressShipping } from "./AddressShipping";

interface Props {
  shipping: ShippingType;
  setShipping: Dispatch<SetStateAction<ShippingType>>;
}

export const CartRight = (props: Props) => {
  const { shipping, setShipping } = props;
  return (
    <div className=" h-full lg:w-[360px] w-full flex flex-col gap-4">
      <AddressShipping shipping={shipping} setShipping={setShipping} />
    </div>
  );
};
