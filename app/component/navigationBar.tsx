import { imageNavigationBar } from "../data/images";
import Image from 'next/image';

function navigatorBar() {
  return (
      <nav className="flex justify-between items-center px-48 py-5 bg-white">
        <div>
        <Image src={imageNavigationBar.logo} alt="Logo" />
        </div>
        <div className="flex gap-9 items-center">
          <p>Why Merry Match?</p>
          <p>How to Merry</p>
          <button className="border border-transparent rounded-xl bg-pink-700 w-24 p-2">
            <p className="text-white">Login</p>
          </button>
        </div>      
      </nav>
  )
}

export const NavigatorBar = navigatorBar;