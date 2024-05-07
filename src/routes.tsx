import { createBrowserRouter } from "react-router-dom";
//import MatchPage from "./components/MatchAnalysis/MatchPage";
import Layout from "./Layout";
import HomePage from "./HomePage";
import SummonerInfo from "./components/Summoners/SummonerInfo";
import MatchPage from "./components/Matches/MatchPage";

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Layout />,
        children: [
            { path: "", element: <HomePage /> },
            { 
                path: "summoner/:gameName/:tag",
                element: <SummonerInfo />
            },
            { path: "/match/:gameName/:tag/:matchId", element: <MatchPage /> }
        ]
    }
]);

export default router;