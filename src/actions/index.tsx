import productsFackStore from "../apis/productsFackStore";

let products: any = [];
export function fetchAllProducts(): any {
  return async function (dispatch: any) {
    const result = await productsFackStore.get("/products");
    // console.log(result.data);
    dispatch({ type: "ALL_PRODUCTS", payload: result.data });
  };
}

export function getProductDetails(id: number): any {
  return async function (dispatch: any) {
    const result = await productsFackStore.get(`/products/${id}`);
    // console.log(result.data);
    dispatch({ type: "PRODUCT_DETAILS", payload: result.data });
  };
}

export function fetchWomenProducts(): any {
  return async function (dispatch: any) {
    const result = await productsFackStore.get(
      "/products/category/women's%20clothing"
    );
    // console.log(result.data);
    dispatch({ type: "WOMEN_PRODUCTS", payload: result.data });
  };
}

export function fetchMenProducts(): any {
  return async function (dispatch: any) {
    const result = await productsFackStore.get(
      "/products/category/men's%20clothing"
    );
    // console.log(result.data);
    dispatch({ type: "MEN_PRODUCTS", payload: result.data });
  };
}

export function addToCart(product: any): any {
  products.push(product);
  return {
    type: "ADD_TO_CART",
    payload: products,
  };
}

export function removeFromCart(productId: number): any {
  const newProductsList = products.filter(
    (product: any) => product.id !== productId
  );
  console.log(newProductsList);
  products = newProductsList;
  console.log(products);
  return {
    type: "REMOVE_FROM_CART",
    payload: products,
  };
}
