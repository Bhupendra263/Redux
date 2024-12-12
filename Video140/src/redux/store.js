import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"
// import krege counter Reducer ko.
export const store = configureStore({
      reducer:{
        counter: counterReducer,
      }, 

    //   reducer humari help krega State ko Change krne mein and return krta hai nyi State. 


   /* -> So humne ek Store ko configuer kr diya and  humne ek Store le liye smjhlo kiraye par
       and waha pe hum apni states ko store krege.

       -> And ek baar humne store bna liye uske baad hum iss store ka access dilayege apni app
        ko aur app ko access dilaye humein store ko and provider ko import krana pdega
       in main.jsx
     */ 
    })