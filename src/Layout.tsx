import { useReducer } from 'react';
import NavBar from './components/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import sumIdReducer from './components/Summoners/sumIdReducer';
import SummonerIdContext from './components/Summoners/SummonerIdContext';
import SearchUser from './components/SearchUser';

const Layout = () => {
    const [ curSummonerId, summonerDispatch ] = useReducer(sumIdReducer, ""); // SOLO LA RIOT ID ("nombre/id")
    const navigate = useNavigate();
    const onSearch = (summonerId: string) => {
        const [gameName, tag] = summonerId.split("/");
        navigate(`/summoner/${gameName}/${tag}`);
    }

    return (
        <SummonerIdContext.Provider value={{ summonerId: curSummonerId, dispatch: summonerDispatch }}>
            <NavBar />

            <SearchUser summonerSubmit={(summonerId) => onSearch(summonerId)} />

            <div>
                <Outlet />
            </div>
        </SummonerIdContext.Provider>
    )
}

export default Layout
