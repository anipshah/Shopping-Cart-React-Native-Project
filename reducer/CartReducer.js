const initState = {
  addedItems: [],
  total: 0,
};
const CartReducer = (state = initState, action) => {
  if (action.type === "ADD_TO_CART") {
    let existed_item = state.addedItems.find(
      (item) => action.payload.id === item.id
    );
    if (existed_item) {
      action.payload.count += 1;
      return {
        ...state,
        total: state.total + action.payload.discount_price,
      };
    } else {
      action.payload.count = 1;

      let newTotal = state.total + action.payload.discount_price;

      return {
        ...state,
        addedItems: [...state.addedItems, action.payload],
        total: newTotal,
      };
    }
  }
  if (action.type === "REMOVE_FROM_CART") {
    let itemToRemove = state.addedItems.find(
      (item) => action.payload.id === item.id
    );
    let new_items = state.addedItems.filter(
      (item) => action.payload.id !== item.id
    );

    let newTotal =
      state.total - itemToRemove.discount_price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  if (action.type === "ADD_QUANTITY") {
    let addedItem = state.addedItems.find(
      (item) => item.id === action.payload.id
    );
    addedItem.count += 1;
    let newTotal = state.total + addedItem.discount_price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === "SUB_QUANTITY") {
    let addedItem = state.addedItems.find(
      (item) => item.id === action.payload.id
    );
    if (addedItem.count === 1) {
      let new_items = state.addedItems.filter(
        (item) => item.id !== action.payload.id
      );
      let newTotal = state.total - addedItem.discount_price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.count -= 1;
      let newTotal = state.total - addedItem.discount_price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }
  return state;
};

export default CartReducer;
