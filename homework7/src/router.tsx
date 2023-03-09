import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, HelpPage, LoginPage } from "./routes";
import GeneralPage from "./routes/GeneralPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/login", element: <LoginPage /> },
      {path: "/help", element: <HelpPage />}
    ],
  },
]);

export default router;
