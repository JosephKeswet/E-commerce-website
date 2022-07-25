import { createSlice } from '@reduxjs/toolkit'

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
        }
        else{
            const tempProduct = {...action.payload,cartQuantity:1}
            state.cartItems.push(tempProduct)
            
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
        
      
   
    }

  },
})

// Action creators are generated for each case reducer function
export const {addToCart,removeFromCart,descreaseQuantity } = cartSlice.actions

export default cartSlice.reducer