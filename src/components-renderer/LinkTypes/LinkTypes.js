import { LinkButton } from "../../modules";

export const LinkTypes = () => {

    const outContainerClass = 'm-4 border-2 border-black p-4';
    const innerContainerClass = 'flex justify-between items-baseline m-4';

    return (
        <div>
            <div className={outContainerClass}>
                <h1>Default</h1>
                <div className={innerContainerClass}>
                  <LinkButton path='/buttons'>link</LinkButton>
                </div>
            </div>
        </div>
    );
}