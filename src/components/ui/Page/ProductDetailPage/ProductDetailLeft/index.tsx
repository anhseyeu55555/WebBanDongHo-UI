import { useMemo, useState } from "react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import { ImageCustom } from "@/components/ui/ImageCustom";
import { SliderCarousel } from "@/components/ui/SliderCarousel";
import { ProductType } from "@/types/product";

import { ProductDetailRight } from "../ProductDetailRight";

interface Props {
  dataProductDetail: ProductType;
}

export const ProductDetailLeft = (props: Props) => {
  const { dataProductDetail } = props;

  const [selectedImage, setSelectedImage] = useState();

  const gallery = useMemo(
    () => [
      dataProductDetail.image,
      dataProductDetail.image2,
      dataProductDetail.image3,
    ],
    [dataProductDetail],
  );

  return (
    <div className="flex-grow relative" style={{ width: "calc(100% - 592px)" }}>
      {gallery.length > 0 && (
        <SliderCarousel
          spaceBetween={24}
          thumbs={{
            swiper: selectedImage || null,
          }}
          slidesPerView={1}
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
        >
          {gallery.map((item: string, index: number) => (
            <SwiperSlide key={index}>
              <div className={"w-full h-full relative cursor-pointer"}>
                <ImageCustom
                  src={item}
                  alt={item}
                  width={2550}
                  height={2550}
                  className="w-auto max-h-[635px] object-cover object-center mx-auto"
                />
                {/* 
                {handleDataPrice.sellPrice > 0 &&
                  handleDataPrice.sellPrice < handleDataPrice.price && (
                    <div className="absolute top-0 right-0">
                      <DiscountBadgeIcon />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="font-medium text-xs text-white mb-1">
                          Giảm
                        </div>

                        <div className="font-bold leading-6 text-white">
                          {`${calcDiscountPercent(
                            handleDataPrice.sellPrice,
                            handleDataPrice.price,
                          )}%`}
                        </div>
                      </div>
                    </div>
                  )} */}
              </div>
            </SwiperSlide>
          ))}
        </SliderCarousel>
      )}

      <div className="p-[30px] relative product-gallery-detail">
        {gallery.length > 0 && (
          <SliderCarousel
            spaceBetween={24}
            onSwiper={setSelectedImage as any}
            modules={[Autoplay, Pagination, Navigation, Thumbs]}
            navigation={true}
            isButtonNext
            isButtonPreview
            breakpoints={{
              425: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },

              1280: {
                slidesPerView: 5.5,
              },
            }}
          >
            {gallery.map((item: string, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className={"w-full h-full cursor-pointer flex justify-center"}
                >
                  <ImageCustom
                    src={item}
                    alt={item}
                    width={2550}
                    height={2550}
                    className="object-contain object-center w-[120px] h-[120px] aspect-square rounded-lg border-[1px] border-solid border-gray-10"
                    onClick={() => {
                      console.log("abc");
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </SliderCarousel>
        )}
      </div>

      <div className="lg:hidden block relative pb-8">
        <ProductDetailRight dataProductDetail={dataProductDetail} />
        <div
          className="absolute left-0 bottom-0 bg-gray-10 md:hidden block -translate-x-1/2 h-4"
          style={{ width: 2000 }}
        />
      </div>
    </div>
  );
};
