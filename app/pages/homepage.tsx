import { NavigatorBar } from "../component/navigationBar";
import { HeroCard } from "../component/heroCard";
import { FooterBar } from "../component/footerBar";

function Homepages () {
  return (
    <>
    <div className="relative z-10">
    <NavigatorBar />
    </div>
    <HeroCard />
    <FooterBar />
    </> 
  )
}

export const Homepage = Homepages;