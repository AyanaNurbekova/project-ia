import React, { createContext, useState } from 'react';

export const cardContext = createContext();
const MoviesCardContext = ({children}) => {
    
//!myList
 const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("movies-data"))
);

const addFilmToCart = (movies) => {
    let data = JSON.parse(localStorage.getItem("movies-data")) || [];
    data.push(movies);
    localStorage.setItem("movies-data", JSON.stringify(data));
};
const getFilmToCart = () => {
    if (!localStorage.getItem("movies-data")) {
        localStorage.setItem("movies-data", "[]");
    }
    let cart = JSON.parse(localStorage.getItem("movies-data"));
    setCartData(cart);
};
function deleteFilmToCart(id) {
    let cart = JSON.parse(localStorage.getItem("movies-data"));
    cart = cart.filter((elem) => elem.id !== id);
    localStorage.setItem("movies-data", JSON.stringify(cart));
    getFilmToCart();

}
const values = {
    cartData,
    addFilmToCart,
    deleteFilmToCart,
    getFilmToCart,
    
}
return (
    <cardContext.Provider value={values}>{children}</cardContext.Provider>
);
};
export default MoviesCardContext;