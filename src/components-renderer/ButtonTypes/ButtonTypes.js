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
            >{children}</WrappedComponent>
        );
    };

    return NewComponent;
};

const Button1 = wrapper(Button);
const Button2 = wrapper(Button);
const Button3 = wrapper(Button);

export const ButtonTypes = ({ onClick, isLoading }) => {

    const outContainerClass = 'm-4 border-2 border-black p-4';
    const innerContainerClass = 'flex justify-between m-4';

    return (
        <>
            <div className={outContainerClass}>
                <h1>Color variants</h1>
                <div className={innerContainerClass}>
                    <Button variant='green'>Green</Button>
                    <Button variant='white-green'>White green</Button>
                    <Button variant='gray-green'>Gray Green</Button>
                    <Button variant='gray-blue'>Gray blue</Button>
                    <Button variant='blue'>Blue</Button>
                    <Button variant='dark-blue'>Dark blue</Button>
                    <Button variant='dark-green'>Dark green</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Border Variants</h1>
                <div className={innerContainerClass}>
                    <Button variant={'blue'} rounded='rounded'>Rounded</Button>
                    <Button variant={'blue'} rounded='half-rounded'>Half Rounded</Button>
                    <Button variant={'blue'} rounded='circle'>Circle</Button>
                    <Button variant={'blue'} rounded='circle'>Cr</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Icons Variants</h1>
                <div className={innerContainerClass}>
                    <Button variant={'gray-green'} leftIcon={<Icon variant='gear' right={true} />}>Left icon</Button>
                    <Button variant={'gray-green'} rightIcon={<Icon variant='search' left={true} />} >Right icon</Button>
                    <Button
                        variant={'gray-green'}
                        rounded='circle'
                        leftIcon={<Icon variant='gear' right={true} />}
                        rightIcon={<Icon variant='search' left={true} />}
                    >
                        Both sides
                    </Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Loading Buttons</h1>
                <div className={innerContainerClass}>
                    <Button isLoading={isLoading} onClick={onClick} variant={'gray-green'} leftIcon={<Icon variant='gear' right={true} />}>Left icon</Button>
                    <Button isLoading={isLoading} onClick={onClick} variant={'gray-green'} rightIcon={<Icon variant='search' left={true} />} >Right icon</Button>
                    <Button
                        isLoading={isLoading}
                        onClick={onClick}
                        variant={'gray-green'}
                        rounded='circle'
                        leftIcon={<Icon variant='gear' right={true} />}
                        rightIcon={<Icon variant='search' left={true} />}
                    >
                        Both sides
                    </Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Loading Buttons</h1>
                <div className={innerContainerClass}>
                    <Button1 variant={'gray-green'} leftIcon={<Icon variant='gear' right={true} />}>Left icon</Button1>
                    <Button2 variant={'gray-green'} rightIcon={<Icon variant='search' left={true} />} >Right icon</Button2>
                    <Button3
                        variant={'gray-green'}
                        rounded='circle'
                        leftIcon={<Icon variant='gear' right={true} />}
                        rightIcon={<Icon variant='search' left={true} />}
                    >
                        Both sides
                    </Button3>
                </div>
            </div>
        </>
    );
};