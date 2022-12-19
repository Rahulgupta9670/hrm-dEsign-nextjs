import React from "react";

const initialState = {
    showAlert:true,
    alertMsg:'',
    sideClick:true,
};

const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_ALERT':
            return {...state,showAlert:action.data.showAlert,alertMsg:action.data.alertMsg};
        case 'SIDE_CLICK':
            return {...state,sideClick:action.payload};
        default:
            return state;
    }
}
export default projectReducer;

