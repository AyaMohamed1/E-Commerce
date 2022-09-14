import ProductDetails from "../components/ProductDetails";
import ProductsList from "../components/ProductsList";
import WomenProducts from "../components/WomenProducts";
import MenProducts from "../components/MenProducts";
import IRoute from "../interfaces/route";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: ProductsList,
  },
  {
    path: "/details/:number",
    exact: true,
    component: ProductDetails,
  },
  {
    path: "/women",
    exact: true,
    component: WomenProducts,
  },

  {
    path: "/men",
    exact: true,
    component: MenProducts,
  },
];

export default routes;
