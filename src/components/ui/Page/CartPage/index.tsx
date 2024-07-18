"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { Loading } from "@/components/ui/Loading";
import { handleIsAuthenticated } from "@/helpers/handleIsAuthenticated";
import { useQueryGetAllCartUser } from "@/query/cart/queryHooksCart";
import { useQueryGetProfile } from "@/query/profile/queryFnsProfile";
import { ShippingType } from "@/types/profile";

import { PageWrapper } from "../../PageWrapper";
import { CartLeft } from "./CartLeft";
import { CartRight } from "./CartRight";

const CartPage = () => {
  const { status: loginStatus, data } = useSession();

  const isAuthenticated = handleIsAuthenticated(loginStatus);
  const { data: profile } = useQueryGetProfile(
    (data?.user.name as string) || "",
    isAuthenticated,
  );

  const [listChecked, setListChecked] = useState<string[]>([]);
  const [shipping, setShipping] = useState<ShippingType>({
    diaChi: "",
    email: "",
    hoTen: "",
    sdt: "",
  });

  const { data: cart } = useQueryGetAllCartUser(profile?.makh || "");

  useEffect(() => {
    if (!profile) return;
    if (profile.makh === "") return;

    setShipping({ ...profile });
  }, [profile]);

  if (!cart) return <Loading isCenter height="h-[700px]" />;

  if (cart.length === 0)
    return (
      <div className="h-[700px] w-full flex justify-center items-center text-lg lg:text-2xl">
        Chưa có sản phẩm nào trong giỏ hàng
      </div>
    );

  return (
    <PageWrapper style="pt-10 pb-20">
      <div className="flex lg:flex-row flex-col gap-10">
        <CartLeft
          cart={cart}
          listChecked={listChecked}
          setListChecked={setListChecked}
        />
        <CartRight shipping={shipping} setShipping={setShipping} />
      </div>
    </PageWrapper>
  );
};

export default CartPage;
