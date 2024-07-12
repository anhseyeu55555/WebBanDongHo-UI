import axiosClient from "..";
import { LoginFormType } from "./type";

export const AuthService = {
  signInWithCredentials: (formData: LoginFormType) =>
    axiosClient.post("/login", formData),
};
