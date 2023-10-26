import { Image } from "../../modules";
import product from '../../images/product.png';

export const ImageTypes = () => {

    return (
        <>
            <div className="mt-10 flex justify-center items-center bg-gray-500">
                <div className="flex p-2 justify-center w-[200px] h-[150px] bg-white">
                    <Image variant={Image.variants.PRIMARY} src={product} />
                </div>
            </div>
            {/* <div className="w-[350px] h-[150px] m-auto p-1 bg-white border border-red-200 flex justify-center">
                <Image src={product} />
            </div> */}
        </>
    );
}