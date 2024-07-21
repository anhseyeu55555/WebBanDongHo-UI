"use client";

import { useEffect, useRef } from "react";

export const Paypal = () => {
  const paypal = useRef(null);

  useEffect(() => {
    (window as any).paypal
      .Buttons({
        createOrder: (data: any, actions: any, err: any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 23,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};
