import {ADD_TO_CART} from "../constant";
const intialState ={
    cardData : []
}
export const cardsItems = (state = intialState,action) => {
    return (
        switch(action.type){
            case  ADD_TO_CART:
            return {
                ...state,
                cardData:action.data
            }
            break;
        default :
        return state
        }
    )
}