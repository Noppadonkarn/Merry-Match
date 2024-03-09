import Image from "next/image";

function stepCard(stepCardDetail) {
  return (
    <div className="flex flex-col items-center border border-transparent rounded-3xl p-12 bg-[#2A0B21] w-72 gap-9">
      <div className="flex justify-center items-center border border-transparent rounded-full w-28 h-28 bg-[#411032]">
        <Image src={stepCardDetail.emoji} alt={stepCardDetail.emoji} />
      </div> 
      <div className="text-white text-center flex flex-col gap-5 ">
        <p className="text-xl font-bold">{stepCardDetail.title}</p> 
        <p className="font-light">{stepCardDetail.detail}</p>
      </div>  
    </div>
  )
}
export const StepCard = stepCard;