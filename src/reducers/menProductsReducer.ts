export default (state = [], action: any) => {
  switch (action.type) {
    case "MEN_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
