import { LinkButton } from "../../modules";

export const LinkTypes = () => {

    const outContainerClass = 'm-4 border-2 border-black p-4';
    const innerContainerClass = 'flex justify-between items-baseline m-4 bg-gray-200';

    return (
        <>
            <div>
                <div className={outContainerClass}>
                    <h1>Primary</h1>
                    <div className={innerContainerClass}>
                        <LinkButton size='xs' path='/buttons'>Меню</LinkButton>
                        <LinkButton size='sm' path='/buttons'>Мултимедия</LinkButton>
                        <LinkButton size='base' path='/buttons'>Преси</LinkButton>
                        <LinkButton size='lg' path='/buttons'>Тостери</LinkButton>
                        <LinkButton size='xl' path='/buttons'>Кремове</LinkButton>
                    </div>
                </div>
            </div>

            <div>
                <div className={outContainerClass}>
                    <h1>Secondary</h1>
                    <div className={innerContainerClass}>
                        <LinkButton variant='secondary' size='xs' path='/buttons'>Меню</LinkButton>
                        <LinkButton variant='secondary' size='sm' path='/buttons'>Мултимедия</LinkButton>
                        <LinkButton variant='secondary' size='base' path='/buttons'>Преси</LinkButton>
                        <LinkButton variant='secondary' size='lg' path='/buttons'>Тостери</LinkButton>
                        <LinkButton variant='secondary' size='xl' path='/buttons'>Кремове</LinkButton>
                    </div>
                </div>
            </div>

            <div>
                <div className={outContainerClass}>
                    <h1>Fonts</h1>
                    <div className={innerContainerClass}>
                        <LinkButton font='sm' size='xl' path='/buttons'>SM</LinkButton>
                        <LinkButton font='base' size='xl' path='/buttons'>base</LinkButton>
                        <LinkButton font='bold' size='xl' path='/buttons'>BOLD</LinkButton>
                        <LinkButton font='xl' size='xl' path='/buttons'>XL</LinkButton>
                    </div>
                </div>
            </div>
        </>
    );
}