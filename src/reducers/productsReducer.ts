export default (state = [], action: any) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
