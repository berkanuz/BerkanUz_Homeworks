import CatalogLayout from "./Catalog/Layout";
import CatalogRoutes from "./Catalog/Routes";

const Routes = [
    {
        path: "/",
        element: <CatalogLayout />,
        children: CatalogRoutes,
    }
];

export default Routes