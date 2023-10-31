import React from "react";
import { Checkbox } from "../../modules";

export const CheckboxTypes = () => {

    return (
        <div className="mt-10 flex flex-col w-[500px] p-3 bg-[#F1F1F1] h-[100px] m-auto">
            <Checkbox variant={Checkbox.variants.PRIMARY} label='промоция' />
            <Checkbox variant={Checkbox.variants.PRIMARY} label='промоция' />
        </div>
    );
};