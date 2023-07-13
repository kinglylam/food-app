let defaultState = {
  selectedItems: { items: [], resturantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkboxValue) {
        console.log("ADD_TO_CART");

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          resturantName: action.payload.resturantName,
        };
      } else {
        console.log("REMOVE_FROM_CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.name !== action.payload.name
            ),
          ],
          resturantName: action.payload.resturantName,
        };
      }

      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
