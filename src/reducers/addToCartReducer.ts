export default (state = [], action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return action.payload;
    case "REMOVE_FROM_CART":
      return action.payload;
    default:
      return state;
  }
};
