"use client";

export interface NavbarType {
  label: string;
  value: string;
  children?: NavbarType[];
}

export const listNavbar: NavbarType[] = [
  {
    label: "Trang chủ",
    value: "trang-chủ",
  },
  {
    label: "Sản Phẩm",
    value: "san-pham",
  },
  {
    label: "Danh mục",
    value: "Danh mục",
  },
  {
    label: "Thương hiệu",
    value: "thuong-hieu",
  },
  {
    label: "Nhà cung cấp",
    value: "nha-cung-cap",
  },
];

export const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-[0_4px_12px_0px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-0 xl:px-[20px] 2xl:px-[130px] py-4">
        <div className="flex items-center lg:gap-10 xl:gap-24">
          <div className="flex justify-between w-full ">
            {listNavbar.map((item) => (
              <div
                key={item.value}
                className="flex items-center"
                onClick={() => {
                  console.log(item.value);
                }}
              >
                <p className="font-bold text-md">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
