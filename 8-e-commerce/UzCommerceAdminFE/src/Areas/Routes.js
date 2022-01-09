import AdminLayout from "./Admin/Layout";

import AdminRoutes from "./Admin/Routes";

const Routes = [
    {
        path: "/",
        element: <AdminLayout />,
        children: AdminRoutes,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: AdminRoutes,
    }
];

export default Routes