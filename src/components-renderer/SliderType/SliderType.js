import { Slider } from "../../modules/Slider/Slider";

export const SliderType = () => {

    return (
        <div className="w-full flex justify-center">
            <Slider
                min={0}
                max={1000}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}

            />
        </div>
    );
};