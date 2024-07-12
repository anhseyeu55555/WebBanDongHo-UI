export const ConvertPrice = (price: number): String => {
  if (!price || price == 0) {
    return "Miễn phí";
  }
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
