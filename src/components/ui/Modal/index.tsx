"use client";

import { ModalSignin } from "./ModalChildren/ModalSignin";
import { ModalSignup } from "./ModalChildren/ModalSignup";

export const Modal = () => {
  return (
    <>
      <ModalSignin />

      <ModalSignup />

      {/* <ModalConfirm /> */}
    </>
  );
};
