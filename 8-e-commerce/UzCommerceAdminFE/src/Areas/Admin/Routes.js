import Categories from "./Pages/Categories";
import CategoryUpsert from "./Pages/CategoryUpsert";
import Index from "./Pages/Index";
import OrderDetails from "./Pages/OrderDetails";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import ProductUpsert from "./Pages/ProductUpsert";

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
        path: "ProductUpsert/:productId",
        element: <ProductUpsert />
    },
    {
        path: "ProductUpsert",
        element: <ProductUpsert />
    },
    {
        path: "categories",
        element: <Categories />
    },
    {
        path: "CategoryUpsert/:categoryId",
        element: <CategoryUpsert/>
    },
    {
        path: "CategoryUpsert",
        element: <CategoryUpsert />
    },
    {
        path: "orders",
        element: <Orders />
    },
    {
        path: "orders/:orderId",
        element: <OrderDetails />
    }
];

export default Routes