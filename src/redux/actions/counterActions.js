import { INCREMENT,DECREMENT } from "./actionTypes";


//increment function
export let increment = (count) => {
    return ({
        type:INCREMENT,
        payload:count+1
    })
}

//decrement frunction
export let decrement = (count) => {
    return ({
        type:DECREMENT,
        payload:count-1
    })
}