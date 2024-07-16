"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  height?: number;
  width?: number;
  className: string;
  alt: string;
  onClick?: () => void;
  unoptimized?: boolean;
  isAvatar?: boolean;
  style?: any;
  fill?: boolean;
}

export const ImageCustom = (props: Props) => {
  const {
    src = "",
    height,
    width,
    className = "",
    alt = "",
    onClick,
    unoptimized = false,
    isAvatar = false,
    style,
    fill,
  } = props;

  const [srcImage, setSrcImage] = useState<string>("");

  return (
    <Image
      src={srcImage === "" ? src : srcImage}
      alt={alt}
      height={height}
      width={width}
      className={className}
      unoptimized={unoptimized}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setSrcImage(
            isAvatar
              ? "/images/avatar-default-active.png"
              : "/images/image-default-active.png",
          );
        }
      }}
      onError={() => {
        setSrcImage(
          isAvatar
            ? "/images/avatar-default-active.png"
            : "/images/image-default-active.png",
        );
      }}
      quality={100}
      priority
      onClick={onClick}
      style={style}
      fill={fill}
    />
  );
};
