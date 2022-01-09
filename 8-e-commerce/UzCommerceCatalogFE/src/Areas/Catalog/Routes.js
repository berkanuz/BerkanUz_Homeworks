import Index from "./Pages/Index";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderSummary from "./Pages/OrderSummary";

const Routes = [
    {
        path: "",
        element: <Index />
    },
    {
        path: "products",
        element: <Products />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "checkout",
        element: <Checkout />
    },
    {
        path: "ordersummary/:orderId",
        element: <OrderSummary />
    }
];

export default Routes