import { SHOWMODAL, HIDEMODAL } from "../const/modal.const";

const initialState = {
  showStatus: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOWMODAL:
      return {
        ...state,
        showStatus: true
      }
    case HIDEMODAL:
      return {
        ...state,
        showStatus: false
      }
    default: 
      return state;
  }
}