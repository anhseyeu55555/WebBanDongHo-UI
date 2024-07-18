export interface ProductOrderType {
  masp: string;
  soluong: number;
  dongia: number;
}

export interface OrderType {
  hinhThucThanhToan: number;
  hoTen: string;
  diaChi: string;
  sdt: string;
  email: string;
  ghichu: string;
  makh: string;
  dsSanPham: ProductOrderType[];
}
