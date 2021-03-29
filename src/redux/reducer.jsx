import { ADD_ITEM, DELETE_ITEM } from "./actions";

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log(state.wishList);
      console.log(action.payload);
      return {
        wishList: [...state.wishList, action.payload],
      };
    case DELETE_ITEM:
      const index = action.index;
      return {
        wishList: [
          ...state.wishList.slice(0, index),
          ...state.wishList.slice(index + 1),
        ],
      };
    default:
      return {
        wishList: state.wishList,
      };
  }
};

export default reducer;
