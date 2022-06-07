const cartKey = 'cart'

const getCard = () => {
    const cartString = localStorage.getItem('cart')

    return JSON.parse(cartString) || [];
};

export const addCart = (item) => {
    
}