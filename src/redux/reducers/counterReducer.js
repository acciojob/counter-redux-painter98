import { INCREMENT,DECREMENT } from "../actions/actionTypes";

let initialState = {
    count:0
}//initial state of counter

let counter = (state=initialState,action) => {
    switch(action.type){
        case INCREMENT:
            return (
                {...state,count:action.payload}
            )
        case DECREMENT:
            return (
                {...state,count:action.payload}
            )
        default:
            return state;
    }
}
export default counter;