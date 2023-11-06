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
    ARROW_DOWN: "fa-solid fa-chevron-down",
    ARROW_RIGHT: "fa-solid fa-chevron-right",
    ARROW_UP: "fa-solid fa-arrow-up",
    CALENDAR: "fa-solid fa-calendar-days",
    CART: "fa-solid fa-cart-shopping",
    CHECK: "fa-solid fa-check",
    CHECK_BOARD: "fa-solid fa-calendar-check",
    CHECK_SQUARE: "fa-solid fa-square-check",
    CLIPBOARD: "fa-regular fa-clipboard",
    DROP: "fa-solid fa-droplet",
    EMPTY_STAR: "fa-regular fa-star",
    EXPAND: "fa-solid fa-up-right-and-down-left-from-center rotate-90",
    EYE: "fa-solid fa-eye",
    EYE_SLAHED: "fa-solid fa-eye-slash",
    FULL_STAR: "fa-solid fa-star",
    GEAR: "fa-solid fa-gear",
    GRID: "fa-solid fa-border-all",
    HEALTHCARE: "fa-solid fa-hand-holding-heart",
    HEART: "fa-regular fa-heart",
    HIKING: "fa-solid fa-person-hiking",
    HOME: "fa-solid fa-house-chimney-window",
    LIST: "fa-solid fa-list-ul",
    MAIL: "fa-solid fa-envelope",
    MENU_BARS: "fa-solid fa-bars",
    MINUS: "fa-solid fa-minus",
    MIXER: "fa-solid fa-blender",
    MULTIMEDIA: "fa-brands fa-youtube",
    PEN: "fa-solid fa-pen",
    PHONE: "fa-solid fa-phone-volume",
    PLUS: "fa-solid fa-plus",
    SEARCH: "fa-solid fa-magnifying-glass",
    SPORT: "fa-solid fa-volleyball",
    TRASH: "fa-regular fa-trash-can",
    TREE: "fa-solid fa-tree",
    TRUCK: "fa-solid fa-truck-fast fa-flip-horizontal",
    UNLOCK: "fa-solid fa-unlock",
    USER: "fa-solid fa-user",
    USER_GROUP: "fa-solid fa-user-group",
};