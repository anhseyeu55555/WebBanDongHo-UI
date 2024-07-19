"use client";

import { useRef } from "react";

const OrdersPage = () => {
  const orderTabWrapperRef = useRef<any>();

  return (
    <div className="w-full">
      <div ref={orderTabWrapperRef} className="order-tab-wrapper">
        đơn hàng
      </div>
    </div>
  );
};

export default OrdersPage;
