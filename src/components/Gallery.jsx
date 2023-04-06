import React,{useState} from 'react'
import { GalleryData } from '../data';
import GalleryCard from './GalleryCard';
import { BsArrowRight } from 'react-icons/bs';
import {MdList ,MdDoubleArrow} from 'react-icons/md'
import Header from './Header';
const Gallery = () => {
  const {  Gallerylist } = GalleryData;
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
 
    setIsShown(true);
  };

  return (
    <div>  
        
    <Header/> 
<div className=" pl-3 pt-28 text-4xl">   
<h1 className="pb-4 italic font-bold">What is Steganography?</h1>
<h3 className="italic">A steganography technique involves hiding sensitive information within an ordinary, non-secret file or message, so that it will not be detected. The sensitive information will then be extracted from the ordinary file or message at its destination, thus avoiding detection. Steganography is an additional step that can be used in conjunction with encryption in order to conceal or protect data.</h3> 

<div className="pt-10">
<h1 className="pb-4 italic font-bold" >How to create stego media?</h1>
<h3 className="italic" >Drag and drop the cover media and the secret media in Drag and drop files section, then choose the file you want to drag then press the button create and the output stego media will appear in the second column of this section.</h3>

</div> 
<div className="pt-10">
<h1 className="pb-4 italic font-bold" >How to extract secret media?</h1>
<h3 className="italic" >Drag and drop the stego media in Drag and drop files section, then choose the file you want to drag then press the button Extract secret and the output cover media and secret media will appear in the second column of this section.</h3>


</div> 


</div>

</div> 
  )
}

export default Gallery