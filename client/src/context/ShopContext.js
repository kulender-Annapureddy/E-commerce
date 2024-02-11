import React,{useState , createContext } from "react";
import all_products from "../components/assets/allProducts";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++ ){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItems] = useState(getDefaultCart());
    const [userInfo, setUserInfo] = useState({});
     
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
        console.log(cartItem);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
    }
    const getTotal =() => {
        let totalamount = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalamount += itemInfo.new_price * cartItem[item]
            }
            
        }
        return totalamount
    }
    const TotalCartCount = () => {
        let totalitem = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                totalitem += cartItem[item];
            }
        }
        return totalitem;
    }

    const contextValue = {all_products,TotalCartCount,getTotal, cartItem,userInfo,setUserInfo, addToCart, removeFromCart};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;