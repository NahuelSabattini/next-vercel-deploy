import Image from "next/image";
import { useState } from "react";

const UploadImg: React.FC = () => {

    const [image, setImage] = useState<string>('')

    const detectImg = (e: any) =>{
        console.log(e.target.files)
        setImage(URL.createObjectURL(e.target.files[0]))
    } 


    return ( 
        <>
            <input type='file' onChange={(e)=>detectImg(e)}></input>
            <Image src={image} alt={"image"} width={400} height={400}/>
        </>
     );
}
 
export default UploadImg;