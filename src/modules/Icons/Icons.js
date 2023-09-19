const getMargins = (left, right) => {
    let marginLeft = left ? 'ml-2' : '';
    let marginRight = right ? 'mr-2' : '';
    return [marginLeft, marginRight];
};

export const Icon = ({
    variant,
    left = null,
    right = null }) => {

    const [marginLeft, marginRight] = getMargins(left, right);
    const classes = Icon.variants[variant] + ` ${marginLeft} ${marginRight}`;

    return (
        <i className={classes}></i>
    );
};

Icon.variants = {
    'search': 'fa-solid fa-magnifying-glass',
    'heart': 'fa-regular fa-heart',
    'gear': 'fa-solid fa-gear',
    'trash': 'fa-regular fa-trash-can',
    'cart': 'fa-solid fa-cart-shopping',
    'user': 'fa-solid fa-user',
    'user-group': 'fa-solid fa-user-group',
    'phone': 'fa-solid fa-phone-volume',
    'mail': 'fa-solid fa-envelope',
    'clipboard': 'fa-regular fa-clipboard',
    'arrow-up': 'fa-solid fa-arrow-up',
    'full-star': 'fa-solid fa-star',
    'empty-star': 'fa-regular fa-star',
    'calendar': 'fa-solid fa-calendar-days',
    'check': 'fa-regular fa-square-check',
    'pen': 'fa-solid fa-pen',
    'plus': 'fa-solid fa-plus',
    'minus': 'fa-solid fa-minus',
    'arrow-down': 'fa-solid fa-chevron-down',
    'arrow-right': 'fa-solid fa-chevron-right',
    'list': 'fa-solid fa-list-ul',
    'expand': 'fa-solid fa-up-right-and-down-left-from-center rotate-90',
    'menu-bars': 'fa-solid fa-bars',
    'grid': 'fa-solid fa-border-all',

    'healthcare': 'fa-solid fa-hand-holding-heart',
    'mixer': 'fa-solid fa-blender',
    'home': 'fa-solid fa-house-chimney-window',
    'tree': 'fa-solid fa-tree',
    'multimedia': 'fa-brands fa-youtube',
    'hiking': 'fa-solid fa-person-hiking',
    'sport': 'fa-solid fa-volleyball',
    'drop': 'fa-solid fa-droplet',
};