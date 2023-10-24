import { FilterCheckbox } from "../../modules";

export const FilterCheckboxTypes = () => {

    return (
        <div className="mt-10 flex flex-col w-[500px] p-3 bg-[#F1F1F1] h-[100px] m-auto">
            <FilterCheckbox variant={FilterCheckbox.variants.PRIMARY} label='промоция' />
            <FilterCheckbox variant={FilterCheckbox.variants.PRIMARY} label='промоция' />
        </div>
    );
};