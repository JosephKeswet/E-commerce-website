import { createSlice } from '@reduxjs/toolkit'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  cartItems:[],
  cartTotalQuantity:0,
  cartTotalAmount:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,action) =>{
       const itemIndex = state.cartItems.findIndex( 
        (item) => item.id === action.payload.id
        )

        if(itemIndex >= 0){
            state.cartItems[itemIndex].cartQuantity += 1
            toast.info(`Increased ${state.cartItems[itemIndex].shoeName} quantity`,{
              position:"top-left"
            })
        }
        else{
            const tempProduct = {...action.payload,cartQuantity:1}
            state.cartItems.push(tempProduct)
            toast.success(` You added ${action.payload.shoeName} to cart`,{
              position:"top-left"
            })
            
        }
    },
    removeFromCart:(state,action) =>{
      const newArray = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartItems = newArray
    },
    descreaseQuantity:(state,action) => {
      const itemIndex = state.cartItems.findIndex( 
        (item) => item.id === action.payload.id
        )
        if(itemIndex >= 1){
            state.cartItems[itemIndex].cartQuantity -= 1
        }
        
      },
      getTotals:(state,action) =>{
        let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
          const {price,cartQuantity} = cartItem
          const itemTotal = price * cartQuantity
          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity
          
          return cartTotal
        },{
          total:0,
          quantity:0
        })
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      }

  },
})

// Action creators are generated for each case reducer function
export const {addToCart,removeFromCart,descreaseQuantity ,getTotals} = cartSlice.actions

export default cartSlice.reducer