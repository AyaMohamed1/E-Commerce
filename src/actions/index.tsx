import productsFackStore from "../apis/productsFackStore";

export function fetchAllProducts(): any {
  return async function (dispatch: any) {
    const result = await productsFackStore.get("/products");
    console.log(result);
    dispatch({ type: "FETCH_PRODUCTS", payload: result });
  };
}
