import { Input } from "../../modules";

export const InputTypes = () => {


    return (
        <div className="flex flex-col gap-4  w-[500px] p-[50px] bg-gray-200">
            <span className="text-xs" >PRIMARY</span>
            <Input variant={Input.variants.PRIMARY} />
            <span className="text-xs" >PRIMARY_PASSWORD</span>
            <Input variant={Input.variants.PRIMARY_PASSWORD} />
            <span className="text-xs" >SECONDARY</span>
            <Input variant={Input.variants.SECONDARY} icon='MAIL' />
        </div>
    );
};