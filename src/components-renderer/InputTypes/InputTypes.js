import React from "react";
import { Input } from "../../modules";

export const InputTypes = () => {

    const [value, setValue] = React.useState('');

    const onChangeHandler = React.useCallback((e) => {
        setValue(e.target.value);
    }, []);


    return (
        <div className="flex flex-col gap-4  w-[500px] p-[50px] bg-gray-200">

            <span className="text-xs" >PRIMARY</span>
            <Input variant={Input.variants.PRIMARY} value={value} onChange={onChangeHandler} />

            <span className="text-xs" >PRIMARY_PASSWORD</span>
            <Input variant={Input.variants.PRIMARY_PASSWORD} />

            <span className="text-xs" >SECONDARY</span>
            <Input variant={Input.variants.SECONDARY} icon='MAIL' />

            <span className="text-xs" >SECONDARY_PASSWORD</span>
            <Input variant={Input.variants.SECONDARY_PASSWORD} />

        </div>
    );
};