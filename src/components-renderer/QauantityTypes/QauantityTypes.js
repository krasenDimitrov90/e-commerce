import { Qauantity } from "../../modules";

export const QauantityTypes = () => {

    const submitHanler = (v) => console.log('The amount is ' + v); 

    return (
        <div className="flex justify-center items-center">
            <Qauantity />
        </div>
    );
};