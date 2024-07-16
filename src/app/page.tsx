import { Metadata } from "next";

import HomePage from "@/components/ui/Page/HomePage";

export const metadata: Metadata = {
  title: "Trang chủ - Xe đạp",
  description: "Xe đạp Việt Nam",
};

export default function Home() {
  return <HomePage />;
}
