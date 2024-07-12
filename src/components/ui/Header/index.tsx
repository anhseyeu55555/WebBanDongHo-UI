"use client";

import { Topbar } from "../Header/Topbar";

const Header = () => {
  return (
    <>
      <div className="w-full fixed z-[1024] hidden lg:block">
        <Topbar />
        {/* <Navbar
          menu={menu?.find((x: any) => x.alias == "header")?.items || []}
        /> */}
      </div>

      {/* <TopbarMobile menu={menu} /> */}
    </>
  );
};

export default Header;
