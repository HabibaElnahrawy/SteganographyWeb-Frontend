// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import feature from '../src/assets/img/features/feature.png';
import Feature1Img from '../src/assets/img/features/feature2.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';

import LogoV2 from '../src/assets/img/logo-v2.png';

import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';







export const featuresData = {
  title: 'Some Services We Offer',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: feature,
      bgImage: Feature4BgImg,
      title: 'Create Stego media ',
      description:
        'beyda5al el cover w el secret media w ytala3 output el howa el stego media w y2dar y3ml download',
      linkText: 'Get started',
      delay: '400',
      href: '/createStegoMedia',
    },
    {
      image: Feature2Img,
      bgImage: Feature4BgImg,
      title: 'Extract secret ',
      description:
        'el user beyda5al stego media w beytala3 cover w secret media w y2dar y3ml download ',
      linkText: 'Get started',
      delay: '700',
      href: '/extractSecret',
    },
    {
      image: Feature3Img,
      bgImage: Feature4BgImg,
      title: 'Account',
      description:
        'rgetgrdtbgbdgbdgbdgbdfbd',
      linkText: 'Get started',
      delay: '1000',
      href: '/',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Gallery',
      description:
        'el user y2dar yshof kol el stego media w el hagat el 3amlha abl keda ',
      linkText: 'Learn more',
      delay: '1300',
      href: '/secondgallery',
    },
  ],
};
export const GalleryData = {
  title: 'Some Services We Offer',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  Gallerylist: [
    {
      image: Feature1Img,
      bgImage: Feature4BgImg,
      title: 'Media1 ',
      
    
    },
    {
      image: Feature2Img,
      bgImage: Feature4BgImg,
      title: 'Media2 ',
     
      delay: '0',
      href: '/extractSecret',
    },
    {
      image: Feature2Img,
      bgImage: Feature4BgImg,
      title: 'Media3 ',
     
      delay: '0',
      href: '/extractSecret',
    },
    {
      image: Feature2Img,
      bgImage: Feature4BgImg,
      title: 'Media4 ',
     
      delay: '0',
      href: '/extractSecret',
    },
    {
      image: Feature2Img,
      bgImage: Feature4BgImg,
      title: 'Media5 ',
     
      delay: '0',
      href: '/extractSecret',
    },
    {
      image: Feature3Img,
      bgImage: Feature4BgImg,
      title: 'Media6',
     
      delay: '0',
      href: '/extractSecret',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Media7',
     
   
      delay: '0',
      href: '/extractSecret',
    },
  ],
};

export const footerData = {
  logo: LogoV2,
  address: 'kjndlsklkdmfkl;smmd',
  email: 'info@gmail.com',
  phone: '12345688',
  list1: [
   
   
    {
      name: 'Gallery',
      href: '/secondgallery',
    },
    {
      name: 'Login',
      href: '/',
    },
  ],
  list2: [
   
    {
      name: 'Sign Up',
      href: '/SignUp',
    },
   
    {
      name: 'Q & A',
      href: '/gallery',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};