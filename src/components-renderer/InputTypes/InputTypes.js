import { Input } from "../../modules";

export const InputTypes = () => {

    const variant = Input.variants.PRIMARY_PASSWORD;

    return (
        <div className="flex flex-col gap-4 h-[220px] w-[500px] p-[50px] bg-gray-200">
            <Input variant={variant} />
            <Input variant={Input.variants.PRIMARY} />
        </div>
    );
};