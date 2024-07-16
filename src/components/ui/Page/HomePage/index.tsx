import { BannerHome } from "./Banner";
import { SectionProduct } from "./SectionProduct";

const HomePage = () => {
  return (
    <div className="w-full h-full pt-4 lg:pt-[235px] bg-gray-10">
      <BannerHome />

      <SectionProduct products={[]} title="Sản phẩm mới" />
      <SectionProduct products={[]} title="Sản phẩm bán chạy nhất" />
      <SectionProduct products={[]} title="Sản phẩm khuyến mãi" />
    </div>
  );
};

export default HomePage;
