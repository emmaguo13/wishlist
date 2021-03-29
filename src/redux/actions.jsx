export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = (item) => {
  console.log("adding item");
  console.log("item", item);
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (index) => {
  console.log("deletingitem");
  console.log("index", index);
  return {
    type: DELETE_ITEM,
    index: index,
  };
};
