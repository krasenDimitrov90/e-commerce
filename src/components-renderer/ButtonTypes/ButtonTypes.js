import React from "react";
import { Button, Icon } from "../../modules";

const wrapper = (WrappedComponent) => {
    const NewComponent = ({
        variant,
        rounded,
        leftIcon,
        rightIcon,
        children
    }) => {
        const [isLoading, setIsLoading] = React.useState(false);

        const clickHandler = React.useCallback(() => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        });
        return (
            <WrappedComponent onClick={clickHandler}
                isLoading={isLoading}
                variant={variant}
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

export const ButtonTypes = ({ onClick, isLoading }) => {
    const outContainerClass = 'm-4 border-2 border-black p-4';
    const innerContainerClass = 'flex justify-between items-baseline m-4';

    return (
        <>
            <div className={outContainerClass}>
                <h1>Default</h1>
                <div className={innerContainerClass}>
                    <Button upperCase='uppercase' variant='primary' >primary</Button>
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
                    <Button rounded='circle' variant='outline-info' >info</Button>
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
                    <Button size='xs' rounded='rounded' variant='outline-primary' >XS</Button>
                    <Button size='sm' rounded='rounded' variant='outline-secondary' >SM</Button>
                    <Button size='base' rounded='rounded' variant='outline-info' >BASE</Button>
                    <Button size='lg' rounded='rounded' variant='outline-dark' >LG</Button>
                    <Button size='xl' rounded='rounded' variant='outline-danger' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Fonts</h1>
                <div className={innerContainerClass}>
                    <Button font='sm' rounded='rounded' variant='primary' >SM</Button>
                    <Button font='base' rounded='rounded' variant='primary' >BASE</Button>
                    <Button font='bold' rounded='rounded' variant='primary' >BOLD</Button>
                    <Button font='xl' rounded='rounded' variant='primary' >XL</Button>
                </div>
            </div>
        </>
    );
};