import { createBrowserRouter } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import DocumentSummaryPage from "../pages/DocumentSummaryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DocumentSummaryPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

export default router;
