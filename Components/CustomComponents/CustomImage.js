
import img from '../../public/loading.gif';
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
    return img;
}

const CustomImage = ({ imageUrl, title }) => {

    return (
        <Image
            alt={title}
            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${imageUrl}`}
            layout="fill"
            objectFit="cover"
            quality={100}
        />
    )
}
export default CustomImage;