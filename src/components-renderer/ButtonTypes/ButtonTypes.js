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
    const outContainerClass = 'm-10 border-2 border-black p-4';
    const innerContainerClass = 'flex justify-between items-baseline m-4';

    return (
        <>
            <div className={outContainerClass}>
                <h1>Default</h1>
                <div className={innerContainerClass}>
                    <Button upperCase={true} variant='PRIMARY' >primary</Button>
                    <Button variant='SECONDARY' >secondary</Button>
                    <Button variant='INFO' >info</Button>
                    <Button variant='DARK'>dark</Button>
                    <Button variant='DANGER' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Outlined</h1>
                <div className={innerContainerClass}>
                    <Button variant='OUTLINE_PRIMARY' >primary</Button>
                    <Button variant='OUTLINE_SECONDARY' >secondary</Button>
                    <Button variant='OUTLINE_INFO' >info</Button>
                    <Button variant='OUTLINE_DARK' >dark</Button>
                    <Button variant='OUTLINE_DANGER' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Rounded</h1>
                <div className={innerContainerClass}>
                    <Button rounded='ROUNDED' variant='OUTLINE_PRIMARY' >primary</Button>
                    <Button rounded='ROUNDED' variant='OUTLINE_SECONDARY' >secondary</Button>
                    <Button rounded='ROUNDED' variant='OUTLINE_INFO' >info</Button>
                    <Button rounded='ROUNDED' variant='OUTLINE_DARK' >dark</Button>
                    <Button rounded='ROUNDED' variant='OUTLINE_DANGER' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Circled</h1>
                <div className={innerContainerClass}>
                    <Button rounded='CIRCLED' variant='OUTLINE_PRIMARY' >primary</Button>
                    <Button rounded='CIRCLED' variant='OUTLINE_SECONDARY' >secondary</Button>
                    <Button rounded='CIRCLED' variant='OUTLINE_INFO' >is</Button>
                    <Button rounded='CIRCLED' variant='OUTLINE_DARK' >dark</Button>
                    <Button rounded='CIRCLED' variant='OUTLINE_DANGER' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Top rounded</h1>
                <div className={innerContainerClass}>
                    <Button rounded='TOP_ROUNDED' variant='OUTLINE_PRIMARY' >primary</Button>
                    <Button rounded='TOP_ROUNDED' variant='OUTLINE_SECONDARY' >secondary</Button>
                    <Button rounded='TOP_ROUNDED' variant='OUTLINE_INFO' >info</Button>
                    <Button rounded='TOP_ROUNDED' variant='OUTLINE_DARK' >dark</Button>
                    <Button rounded='TOP_ROUNDED' variant='OUTLINE_DANGER' >danger</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Sizes</h1>
                <div className={innerContainerClass}>
                    <Button size='XS' rounded='ROUNDED' variant='OUTLINE_PRIMARY' >X</Button>
                    <Button size='SM' rounded='ROUNDED' variant='OUTLINE_SECONDARY' >SM</Button>
                    <Button size='BASE' rounded='ROUNDED' variant='OUTLINE_INFO' >BASE</Button>
                    <Button size='LG' rounded='ROUNDED' variant='OUTLINE_DARK' >LG</Button>
                    <Button size='XL' rounded='ROUNDED' variant='OUTLINE_DANGER' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Font Sizes</h1>
                <div className={innerContainerClass}>
                    <Button fontSize='XS' size='XL' rounded='ROUNDED' variant='PRIMARY' >XS</Button>
                    <Button fontSize='SM' size='XL' rounded='ROUNDED' variant='SECONDARY' >SM</Button>
                    <Button fontSize='BASE' size='XL' rounded='ROUNDED' variant='INFO' >BASE</Button>
                    <Button fontSize='LG' size='XL' rounded='ROUNDED' variant='DARK' >LG</Button>
                    <Button fontSize='XL' size='XL' rounded='ROUNDED' variant='DANGER' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Font Sizes And Sizes</h1>
                <div className={innerContainerClass}>
                    <Button fontSize='XS' size='XS' rounded='ROUNDED' variant='PRIMARY' >XS</Button>
                    <Button fontSize='SM' size='SM' rounded='ROUNDED' variant='SECONDARY' >SM</Button>
                    <Button fontSize='BASE' size='BASE' rounded='ROUNDED' variant='INFO' >BASE</Button>
                    <Button fontSize='LG' size='LG' rounded='ROUNDED' variant='DARK' >LG</Button>
                    <Button fontSize='XL' size='XL' rounded='ROUNDED' variant='DANGER' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Fonts</h1>
                <div className={innerContainerClass}>
                    <Button fontWeight='SM' rounded='ROUNDED' variant='PRIMARY' >SM</Button>
                    <Button fontWeight='BASE' rounded='ROUNDED' variant='PRIMARY' >BASE</Button>
                    <Button fontWeight='BOLD' rounded='ROUNDED' variant='PRIMARY' >BOLD</Button>
                    <Button fontWeight='XL' rounded='ROUNDED' variant='PRIMARY' >XL</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Square Button h-36 w-36</h1>
                <div className={innerContainerClass}>
                    <Button fontSize='XS' size='SQUARE_XS' rounded='ROUNDED' variant='PRIMARY' ><Icon variant='SEARCH' /></Button>
                    <Button fontSize='SM' size='SQUARE_SM' rounded='ROUNDED' variant='SECONDARY' ><Icon variant='SEARCH' /></Button>
                    <Button fontSize='BASE' size='SQUARE_BASE' rounded='ROUNDED' variant='INFO' ><Icon variant='SEARCH' /></Button>
                    <Button fontSize='LG' size='SQUARE_LG' rounded='ROUNDED' variant='DARK' ><Icon variant='SEARCH' /></Button>
                    <Button fontSize='XL' size='SQUARE_XL' rounded='ROUNDED' variant='DANGER' ><Icon variant='SEARCH' /></Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Text With Icon</h1>
                <div className={innerContainerClass}>
                    <Button leftIcon={<Icon variant='CART' right={true} />} rounded='ROUNDED' variant='PRIMARY' >Настройки</Button>
                    <Button leftIcon={<Icon variant='CART' right={true} />} rounded='ROUNDED' variant='SECONDARY' >Настройки</Button>
                    <Button leftIcon={<Icon variant='CART' right={true} />} rounded='ROUNDED' variant='INFO' >Настройки</Button>
                    <Button leftIcon={<Icon variant='CART' right={true} />} rounded='ROUNDED' variant='DARK' >Настройки</Button>
                    <Button leftIcon={<Icon variant='CART' right={true} />} rounded='ROUNDED' variant='DANGER' >Настройки</Button>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Loading Buttons - Click To Try</h1>
                <div className={innerContainerClass}>
                    <Button1 fontSize='XS' size='XS' rounded='ROUNDED' variant='PRIMARY' >XS</Button1>
                    <Button2 fontSize='SM' size='SM' rounded='ROUNDED' variant='SECONDARY' >SM</Button2>
                    <Button3 fontSize='BASE' size='BASE' rounded='ROUNDED' variant='INFO' >BASE</Button3>
                    <Button4 fontSize='LG' size='LG' rounded='ROUNDED' variant='DARK' >LG</Button4>
                    <Button5 fontSize='XL' size='XL' rounded='ROUNDED' variant='DANGER' >XL</Button5>
                </div>
            </div>

            <div className={outContainerClass}>
                <h1>Loading Buttons - Click To Try</h1>
                <div className={innerContainerClass}>
                    <Button1 leftIcon={<Icon variant='CART' right={true} />} fontSize='XS' size='XS' rounded='ROUNDED' variant='PRIMARY' >XS</Button1>
                    <Button2 leftIcon={<Icon variant='CART' right={true} />} fontSize='SM' size='SM' rounded='ROUNDED' variant='SECONDARY' >SM</Button2>
                    <Button3 leftIcon={<Icon variant='CART' right={true} />} fontSize='BASE' size='BASE' rounded='ROUNDED' variant='INFO' >BASE</Button3>
                    <Button4 leftIcon={<Icon variant='CART' right={true} />} fontSize='LG' size='LG' rounded='ROUNDED' variant='DARK' >LG</Button4>
                    <Button5 leftIcon={<Icon variant='CART' right={true} />} fontSize='XL' size='XL' rounded='ROUNDED' variant='DANGER' >XL</Button5>
                </div>
            </div>
        </>
    );
};