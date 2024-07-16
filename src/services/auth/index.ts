import axiosClient from "..";
import { LoginFormType, RegisterFormType } from "./type";

export const AuthService = {
  signInWithCredentials: (formData: LoginFormType) =>
    axiosClient.post("/login", formData),

  signUpWithCredentials: (formData: RegisterFormType) =>
    axiosClient.post("/user", formData),
};
