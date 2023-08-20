/** @format */

import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import AuthLayout from "../layouts/auth";

const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	return useRoutes([
		{
			path: "/",
			element: <DashboardLayout />,
			children: [
				{ element: <Navigate to={DEFAULT_PATH} replace />, index: true },
				{ path: "app", element: <GeneralApp /> },
				{ path: "settings", element: <Settings /> },

				{ path: "404", element: <Page404 /> },
				{ path: "*", element: <Navigate to="/404" replace /> },
			],
		},
		{
			path: "/auth",
			element: <AuthLayout />,
			children: [
				{ path: "login", element: <LoginPage /> },
				{ path: "register", element: <RegisterPage /> },
				{ path: "reset-password", element: <ResetPasswordPage /> },
				{ path: "new-password", element: <NewPasswordPage /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}

const GeneralApp = Loadable(
	lazy(() => import("../pages/dashboard/GeneralApp"))
);

const LoginPage = Loadable(lazy(() => import("../pages/auth/login")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/register")));
const ResetPasswordPage = Loadable(
	lazy(() => import("../pages/auth/resetPassword"))
);
const NewPasswordPage = Loadable(
	lazy(() => import("../pages/auth/newPassword"))
);
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
