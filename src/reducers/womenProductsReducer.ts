export default (state = [], action: any) => {
  switch (action.type) {
    case "WOMEN_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
