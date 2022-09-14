export default (state = [], action: any) => {
  switch (action.type) {
    case "PRODUCT_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
