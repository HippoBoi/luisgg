import { createBrowserRouter } from "react-router-dom";
import MatchPage from "./components/MatchAnalysis/MatchPage";
import Layout from "./Layout";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Layout />,
        children: [
            { path: "", element: <HomePage /> },
            { 
                path: "match/:gameName", 
                element: <MatchPage />,
                children: [
                    { path: ":gameId", element: <NavBar /> }
                ]
            }
        ]
    }
]);

export default router;