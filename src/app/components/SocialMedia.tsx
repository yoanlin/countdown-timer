import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconPinterst from "./icon-pinterest.svg";
import IconFacebook from "./icon-facebook.svg";
import IconInstagram from "./icon-instagram.svg";

const SocialMedia = () => {
  return (
    <div className="w-screen h-1/4 relative">
      <Image
        src="/assets/images/pattern-hills.svg"
        alt="hills"
        height={400}
        width={400}
        className="object-cover object-[80%] h-full w-full"
      />
      <div className="flex w-full gap-8 absolute bottom-20 justify-center">
        <Link href="https://www.facebook.com/">
          <IconFacebook className="hover:fill-secondary fill-[#8385A9]" />
        </Link>

        <Link href="https://www.pinterest.com/">
          <IconPinterst className="cursor-pointer hover:fill-secondary fill-[#8385A9]" />
        </Link>
        <Link href="https://www.instagram.com/">
          <IconInstagram className="hover:fill-secondary fill-[#8385A9]" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
