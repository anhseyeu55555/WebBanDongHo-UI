import axiosClient from "..";

export const brandService = {
  getAllBrand: () => axiosClient.get("/thuonghieu"),
};
