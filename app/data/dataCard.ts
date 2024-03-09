import { imageStepCard } from "../data/images";
import { StaticImageData } from 'next/image';

type cardType = { emoji: StaticImageData; title: string; detail: string };
const stepCardData : Array<cardType> = [
  { emoji: imageStepCard.emoji1, title: 'Upload your cool picture', detail: 'Lorem ipsum is a placeholder text' },
  { emoji: imageStepCard.emoji2, title: 'Explore and find the one you like', detail: 'Lorem ipsum is a placeholder text' },
  { emoji: imageStepCard.emoji3, title: 'Click ‘Merry’ for get to know!', detail: 'Lorem ipsum is a placeholder text' },
  { emoji: imageStepCard.emoji4, title: 'Start chating and relationship', detail: 'Lorem ipsum is a placeholder text' }
];

export const StepCardData = stepCardData;