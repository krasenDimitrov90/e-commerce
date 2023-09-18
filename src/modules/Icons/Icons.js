const getMargins = (left, right) => {
    let marginLeft = left ? 'mr-2' : '';
    let marginRight = right ? 'ml-2' : '';
    return [marginLeft, marginRight];
};

export const SearchIcon = ({ left = null, right = null }) => {
    const [marginLeft, marginRight] = getMargins(left, right);
    return (
        <i className={`fa-solid fa-magnifying-glass ${marginLeft} ${marginRight}`}></i>
    )
};

export const HeartIcon = ({ left = null, right = null }) => {
    const [marginLeft, marginRight] = getMargins(left, right);
    return (
        <i className={`fa-regular fa-heart ${marginLeft} ${marginRight}`}></i>
    );
};

export const GearIcon = ({ left = null, right = null }) => {
    const [marginLeft, marginRight] = getMargins(left, right);
    return (
        <i className={`fa-solid fa-gear ${marginLeft} ${marginRight}`}></i>
    );
};