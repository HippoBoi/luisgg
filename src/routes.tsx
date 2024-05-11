import { createBrowserRouter } from "react-router-dom";
//import MatchPage from "./components/MatchAnalysis/MatchPage";
import Layout from "./pages/Layout";
import DefaultPage from "./pages/DefaultPage";
import SummonerInfo from "./components/Summoners/SummonerInfo";
import MatchPage from "./components/Matches/MatchPage";
import ErrorPage from "./pages/ErrorPage";
import LuisGG from "./components/LuisGG";
import RiotTxt from "./components/RiotTxt";

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <DefaultPage /> },
            { 
                path: "summoner/:gameName/:tag",
                element: <SummonerInfo />
            },
            { path: "/match/:gameName/:tag/:matchId", element: <MatchPage /> }
        ]
    },
    { path: "/luisgg.txt", element: <LuisGG /> },
    { path: "/riot.txt", element: <RiotTxt /> }
]);

export default router;