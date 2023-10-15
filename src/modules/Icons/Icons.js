import React from "react";

const getMargins = (left, right) => {
    let marginLeft = left ? 'ml-2' : '';
    let marginRight = right ? 'mr-2' : '';
    return [marginLeft, marginRight];
};

export const Icon = React.memo(({
    variant,
    left = null,
    right = null }) => {

    const [marginLeft, marginRight] = getMargins(left, right);
    const classes = Icon.variants[variant] + ` ${marginLeft} ${marginRight}`;

    return (
        <i className={classes}></i>
    );
});

Icon.variants = {
    SEARCH: 'fa-solid fa-magnifying-glass',
    HEART: 'fa-regular fa-heart',
    GEAR: 'fa-solid fa-gear',
    TRASH: 'fa-regular fa-trash-can',
    CART: 'fa-solid fa-cart-shopping',
    USER: 'fa-solid fa-user',
    USER_GROUP: 'fa-solid fa-user-group',
    PHONE: 'fa-solid fa-phone-volume',
    MAIL: 'fa-solid fa-envelope',
    EYE: 'fa-solid fa-eye',
    EYE_SLAHED: 'fa-solid fa-eye-slash',
    CLIPBOARD: 'fa-regular fa-clipboard',
    ARROW_UP: 'fa-solid fa-arrow-up',
    FULL_STAR: 'fa-solid fa-star',
    EMPTY_STAR: 'fa-regular fa-star',
    CALENDAR: 'fa-solid fa-calendar-days',
    CHECK: 'fa-regular fa-square-check',
    CHECK_SQUARE: 'fa-solid fa-square-check',
    CHECK_BOARD: 'fa-solid fa-calendar-check',
    PEN: 'fa-solid fa-pen',
    PLUS: 'fa-solid fa-plus',
    MINUS: 'fa-solid fa-minus',
    ARROW_DOWN: 'fa-solid fa-chevron-down',
    ARROW_RIGHT: 'fa-solid fa-chevron-right',
    LIST: 'fa-solid fa-list-ul',
    EXPAND: 'fa-solid fa-up-right-and-down-left-from-center rotate-90',
    MENU_BARS: 'fa-solid fa-bars',
    GRID: 'fa-solid fa-border-all',
    TRUCK: 'fa-solid fa-truck-fast fa-flip-horizontal',
    HEALTHCARE: 'fa-solid fa-hand-holding-heart',
    MIXER: 'fa-solid fa-blender',
    HOME: 'fa-solid fa-house-chimney-window',
    TREE: 'fa-solid fa-tree',
    MULTIMEDIA: 'fa-brands fa-youtube',
    HIKING: 'fa-solid fa-person-hiking',
    SPORT: 'fa-solid fa-volleyball',
    DROP: 'fa-solid fa-droplet',
    UNLOCK: 'fa-solid fa-unlock',
};