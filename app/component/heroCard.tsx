import { imageHeroCard } from "../data/images";
import Image from "next/image";
import { StepCard } from "./stepCard";
import { StepCardData } from "../data/dataCard";

function heroCard() { 
  return( 
    <> 
    <main className="bg-[#160404] h-full pt-52 flex flex-col justify-center items-center gap-52">
      <div className="flex relative">
          <Image src={imageHeroCard.heroImage} alt="image" className="absolute right-[500px] top-16" />
        <div className="flex flex-col w-[350px] gap-16 items-center">
          <h1 className="font-bold text-6xl text-center text-white">Make the first ‘Merry’</h1>
          <p className="text-xl text-center text-white">If you feel lonely, let's start meeting
            new people in your area!
            Dont't forget to get Merry with us
          </p>
          <button className="border border-transparent rounded-3xl bg-pink-700 p-5 w-56">
            <p className="text-white font-medium">Start matching!</p>
          </button>
          </div>
          <Image src={imageHeroCard.heroImage1} alt="image1" className="absolute left-[500px] top-[-300px]"/>
      </div>
      <div className="flex justify-between items-center px-36 w-[1500px]">
        <div className="w-[750px] flex flex-col gap-5">
          <p className="text-5xl font-bold text-pink-500">Why Merry Match?</p>
          <div className="text-xl text-white flex flex-col gap-5">
            <p className="font-bold">Merry Match is a new generation of online dating website for everyone</p>
            <p>Whether you’re committed to dating, meeting new people, expanding your social network, meeting locals while traveling, or even just making a small chat with strangers. </p>
            <p>This site allows you to make your own dating profile, discover new people, save favorite profiles, and let them know that you’re interested</p>
          </div>   
        </div>
        <Image src={imageHeroCard.vectorCard} alt="vector" />
      </div>
      <div className="flex flex-col gap-12 w-[1500px] items-center">
        <p className="text-center text-pink-500 text-6xl font-semibold"> How to Merry </p>
        <div className="flex gap-12">
        {
          StepCardData.map((item, index) => (
            <StepCard key={index} {...item} />
          ))
        }
        </div>   
      </div>
      <div className="border border-transparent w-[1300px] h-[369px] rounded-3xl flex flex-col justify-center items-center gap-10 mb-40 bg-gradient-to-r from-[#820025] to-[#A95BCD] relative">
        <Image src={imageHeroCard.heartLeft} alt="heartLeft" className="absolute top-12 left-0"/>
        <Image src={imageHeroCard.heartRight1} alt="heartLeft1" className="absolute bottom-8 right-0"/>
        <Image src={imageHeroCard.heartRight2} alt="heartLeft2" className="absolute bottom-32 right-20"/>
        <div className="text-white text-5xl w-[550px] text-center font-bold">
          Let's start finding and matching someone new
        </div>
        <button className="border border-transparent rounded-3xl bg-red-100 p-5 w-56">
          <p className="text-xl text-red-600 font-medium ">Start Matching!</p>
        </button>
      </div>  
    </main>
    
    </>
  )
}

export const HeroCard = heroCard;