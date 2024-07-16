export interface LoginResponseType {
  quyen: 1 | 2 | 3;
  username: string;
}

export interface TaiKhoanType {
  username: string;
}

export interface ProfileType {
  makh: string;
  hoTen: string;
  gioiTinh: string;
  sdt: string;
  diaChi: string;
  email: string;
  taikhoan: TaiKhoanType;
}
