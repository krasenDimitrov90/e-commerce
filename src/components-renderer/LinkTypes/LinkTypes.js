import { LinkButton } from "../../modules";

export const LinkTypes = () => {

    const outContainerClass = 'm-4 border-2 border-black p-4';
    const innerContainerClass = 'flex justify-between items-baseline m-4 bg-gray-200';

    return (
        <div>
            <div className={outContainerClass}>
                <h1>Default</h1>
                <div className={innerContainerClass}>
                  <LinkButton size='xs' path='/buttons'>Smart home</LinkButton>
                  <LinkButton size='sm' path='/buttons'>Smart home</LinkButton>
                  <LinkButton size='base' path='/buttons'>Smart home</LinkButton>
                  <LinkButton size='lg' path='/buttons'>Smart home</LinkButton>
                  <LinkButton size='xl' path='/buttons'>Smart home</LinkButton>
                </div>
            </div>
        </div>
    );
}