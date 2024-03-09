import Image from "next/image"
import { imageFooterBar } from "../data/images";

function footerBar() {
  return (
    <div className="h-[371px] flex flex-col justify-center items-center gap-7">
      <Image src={imageFooterBar.logo} alt="logo" />
      <p className="text-gray-500 text-xl font-medium">New generation of online dating website for everyone</p>
      <div className="border border-gray-200 w-[1120px]"></div>
      <p className="text-gray-300">copyright ©2022 merrymatch.com  All rights reserved</p>
      <div className="flex gap-5">
        <Image src={imageFooterBar.fbLogo} alt="facebookLogo" />
        <Image src={imageFooterBar.igLogo} alt="instagramLogo" />
        <Image src={imageFooterBar.twLogo} alt="twitterLogo" />
      </div>
    </div>
  )
}

export const FooterBar = footerBar;