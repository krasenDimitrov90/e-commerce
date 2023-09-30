import React from "react";
import { Button, Icon } from "../../modules";

const wrapper = (WrappedComponent) => {
    const NewComponent = ({
        variant,
        rounded,
        size,
        fontSize,
        expand,
        leftIcon,
        rightIcon,
        children
    }) => {
        const [isLoading, setIsLoading] = React.useState(false);

        const clickHandler = React.useCallback(() => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        });
        return (
            <WrappedComponent onClick={clickHandler}
                isLoading={isLoading}
                variant={variant}
                size={size}
                fontSize={fontSize}
                expand={expand}
                rounded={rounded}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
            >
                {children}
            </WrappedComponent>
        );
    };

    return NewComponent;
};

const Button1 = wrapper(Button);
const Button2 = wrapper(Button);
const Button3 = wrapper(Button);
const Button4 = wrapper(Button);
const Button5 = wrapper(Button);

export const ButtonTypes = ({ onClick, isLoading }) => {
    const outContainerClass = 'm-4 border-2 border-black p-4';
    const innerContainerClass = 'flex justify-between items-baseline m-4';

    return (
        <>
            <div className={outContainerClass}>
                <h1>Default</h1>
                <div className={innerContainerClass}>
                    <Button upperCase={true} variant='primary' >primary</Button>
                    <Button variant='secondary' >secondary</Button>
                    <Button variant='info' >info</Button>
                    <Button variant='dark'>dark</Button>
                    <Button variant='danger' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Outlined</h1>
                <div className={innerContainerClass}>
                    <Button variant='outline-primary' >primary</Button>
                    <Button variant='outline-secondary' >secondary</Button>
                    <Button variant='outline-info' >info</Button>
                    <Button variant='outline-dark' >dark</Button>
                    <Button variant='outline-danger' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Rounded</h1>
                <div className={innerContainerClass}>
                    <Button rounded='rounded' variant='outline-primary' >primary</Button>
                    <Button rounded='rounded' variant='outline-secondary' >secondary</Button>
                    <Button rounded='rounded' variant='outline-info' >info</Button>
                    <Button rounded='rounded' variant='outline-dark' >dark</Button>
                    <Button rounded='rounded' variant='outline-danger' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Circled</h1>
                <div className={innerContainerClass}>
                    <Button rounded='circle' variant='outline-primary' >primary</Button>
                    <Button rounded='circle' variant='outline-secondary' >secondary</Button>
                    <Button rounded='circle' variant='outline-info' >is</Button>
                    <Button rounded='circle' variant='outline-dark' >dark</Button>
                    <Button rounded='circle' variant='outline-danger' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Top rounded</h1>
                <div className={innerContainerClass}>
                    <Button rounded='top-rounded' variant='outline-primary' >primary</Button>
                    <Button rounded='top-rounded' variant='outline-secondary' >secondary</Button>
                    <Button rounded='top-rounded' variant='outline-info' >info</Button>
                    <Button rounded='top-rounded' variant='outline-dark' >dark</Button>
                    <Button rounded='top-rounded' variant='outline-danger' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Sizes</h1>
                <div className={innerContainerClass}>
                    <Button size='xs' rounded='rounded' variant='outline-primary' >X</Button>
                    <Button size='sm' rounded='rounded' variant='outline-secondary' >SM</Button>
                    <Button size='base' rounded='rounded' variant='outline-info' >BASE</Button>
                    <Button size='lg' rounded='rounded' variant='outline-dark' >LG</Button>
                    <Button size='xl' rounded='rounded' variant='outline-danger' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Font Sizes</h1>
                <div className={innerContainerClass}>
                    <Button fontSize='xs' size='xl' rounded='rounded' variant='primary' >XS</Button>
                    <Button fontSize='sm' size='xl' rounded='rounded' variant='secondary' >SM</Button>
                    <Button fontSize='base' size='xl' rounded='rounded' variant='info' >BASE</Button>
                    <Button fontSize='lg' size='xl' rounded='rounded' variant='dark' >LG</Button>
                    <Button fontSize='xl' size='xl' rounded='rounded' variant='danger' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Font Sizes And Sizes</h1>
                <div className={innerContainerClass}>
                    <Button fontSize='xs' size='xs' rounded='rounded' variant='primary' >XS</Button>
                    <Button fontSize='sm' size='sm' rounded='rounded' variant='secondary' >SM</Button>
                    <Button fontSize='base' size='base' rounded='rounded' variant='info' >BASE</Button>
                    <Button fontSize='lg' size='lg' rounded='rounded' variant='dark' >LG</Button>
                    <Button fontSize='xl' size='xl' rounded='rounded' variant='danger' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Fonts</h1>
                <div className={innerContainerClass}>
                    <Button fontWeight='sm' rounded='rounded' variant='primary' >SM</Button>
                    <Button fontWeight='base' rounded='rounded' variant='primary' >BASE</Button>
                    <Button fontWeight='bold' rounded='rounded' variant='primary' >BOLD</Button>
                    <Button fontWeight='xl' rounded='rounded' variant='primary' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Square Button h-36 w-36</h1>
                <div className={innerContainerClass}>
                    <Button fontSize='xs' size='square-xs' rounded='rounded' variant='primary' ><Icon variant='search' /></Button>
                    <Button fontSize='sm' size='square-sm' rounded='rounded' variant='secondary' ><Icon variant='search' /></Button>
                    <Button fontSize='base' size='square-base' rounded='rounded' variant='info' ><Icon variant='search' /></Button>
                    <Button fontSize='lg' size='square-lg' rounded='rounded' variant='dark' ><Icon variant='search' /></Button>
                    <Button fontSize='xl' size='square-xl' rounded='rounded' variant='danger' ><Icon variant='search' /></Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Text With Icon</h1>
                <div className={innerContainerClass}>
                    <Button leftIcon={<Icon variant='cart' right={true} />} rounded='rounded' variant='primary' >Настройки</Button>
                    <Button leftIcon={<Icon variant='cart' right={true} />} rounded='rounded' variant='secondary' >Настройки</Button>
                    <Button leftIcon={<Icon variant='cart' right={true} />} rounded='rounded' variant='info' >Настройки</Button>
                    <Button leftIcon={<Icon variant='cart' right={true} />} rounded='rounded' variant='dark' >Настройки</Button>
                    <Button leftIcon={<Icon variant='cart' right={true} />} rounded='rounded' variant='danger' >Настройки</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Loading Buttons - Click To Try</h1>
                <div className={innerContainerClass}>
                    <Button1 isLoading={true} fontSize='xs' size='xs' rounded='rounded' variant='primary' >XS</Button1>
                    <Button2 isLoading={true} fontSize='sm' size='sm' rounded='rounded' variant='secondary' >SM</Button2>
                    <Button3 isLoading={true} fontSize='base' size='base' rounded='rounded' variant='info' >BASE</Button3>
                    <Button4 isLoading={true} fontSize='lg' size='lg' rounded='rounded' variant='dark' >LG</Button4>
                    <Button5 isLoading={true} fontSize='xl' size='xl' rounded='rounded' variant='danger' >XL</Button5>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Loading Buttons - Click To Try</h1>
                <div className={innerContainerClass}>
                    <Button1 leftIcon={<Icon variant='cart' right={true} />} isLoading={true} fontSize='xs' size='xs' rounded='rounded' variant='primary' >XS</Button1>
                    <Button2 leftIcon={<Icon variant='cart' right={true} />} isLoading={true} fontSize='sm' size='sm' rounded='rounded' variant='secondary' >SM</Button2>
                    <Button3 leftIcon={<Icon variant='cart' right={true} />} isLoading={true} fontSize='base' size='base' rounded='rounded' variant='info' >BASE</Button3>
                    <Button4 leftIcon={<Icon variant='cart' right={true} />} isLoading={true} fontSize='lg' size='lg' rounded='rounded' variant='dark' >LG</Button4>
                    <Button5 leftIcon={<Icon variant='cart' right={true} />} isLoading={true} fontSize='xl' size='xl' rounded='rounded' variant='danger' >XL</Button5>
                </div>
            </div>
        </>
    );
};