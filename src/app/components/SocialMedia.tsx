import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Image
            src="/assets/images/icon-facebook.svg"
            alt="facebook"
            width={20}
            height={20}
            className="cursor-pointer hover:fill-secondary"
          />
        </Link>

        <Link href="https://www.pinterest.com/">
          <Image
            src="/assets/images/icon-pinterest.svg"
            alt="pinterest"
            width={20}
            height={20}
            className="cursor-pointer hover:fill-secondary"
          />
        </Link>
        <Link href="https://www.instagram.com/">
          <Image
            src="/assets/images/icon-instagram.svg"
            alt="instagram"
            width={20}
            height={20}
            className="cursor-pointer hover:fill-secondary"
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
