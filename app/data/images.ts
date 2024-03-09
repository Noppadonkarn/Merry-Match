import { StaticImageData } from 'next/image';
import logo from '../images/logo.jpg';
import heroImage from '../images/heroImage.png';
import heroImage1 from '../images/heroImage1.png';
import vectorCard from '../images/vector.png';
import emoji1 from '../images/emoji1.png';
import emoji2 from '../images/emoji2.png';
import emoji3 from '../images/emoji3.png';
import emoji4 from '../images/emoji4.png';
import fbLogo from '../images/fb.png';
import igLogo from '../images/ig.png';
import twLogo from '../images/tw.png';
import heartLeft from '../images/heartLeft.png';
import heartRight1 from '../images/heartRight1.png';
import heartRight2 from '../images/heartRight2.png';
import loginImage from '../images/loginImage.png';

interface ImageNavigationBar {
  logo: StaticImageData;  
}

interface ImageHeroCard {
  heroImage: StaticImageData;
  heroImage1: StaticImageData;
  vectorCard: StaticImageData;
  heartLeft: StaticImageData;
  heartRight1: StaticImageData;
  heartRight2: StaticImageData;
}

interface ImageStepCard {
  emoji1: StaticImageData;
  emoji2: StaticImageData;
  emoji3: StaticImageData;
  emoji4: StaticImageData;
}

interface ImageFooterBar {
  logo: StaticImageData;
  fbLogo: StaticImageData;
  igLogo: StaticImageData;
  twLogo: StaticImageData;
}

interface ImageLogin {
  loginImage: StaticImageData;
}

const imageNavigationBar: ImageNavigationBar = { logo };
const imageHeroCard: ImageHeroCard = { heroImage, heroImage1, vectorCard, heartLeft, heartRight1, heartRight2 };
const imageStepCard: ImageStepCard = { emoji1, emoji2, emoji3, emoji4 };
const imageFooterBar: ImageFooterBar = { logo, fbLogo, igLogo, twLogo };
const imageLogin: ImageLogin = { loginImage };

export { imageNavigationBar, imageHeroCard, imageStepCard, imageFooterBar, imageLogin };