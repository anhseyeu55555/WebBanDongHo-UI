import axiosClient from "..";

export const categoryService = {
  getAllCategory: () => axiosClient.get("/danhmuc"),
};
