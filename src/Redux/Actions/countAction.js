import { DECREMENT, INCREMENT, RESET } from "../Constants/Constants"

export const increment = () =>{
    return {
        type:INCREMENT
    }
}
export const decrement = () =>{
    return {
        type:DECREMENT
    }
}
export const reset = () =>{
    return {
        type:RESET
    }
}


