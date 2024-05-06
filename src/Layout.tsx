import { useReducer } from 'react';
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import sumIdReducer from './components/Summoners/sumIdReducer';
import SummonerIdContext from './components/Summoners/SummonerIdContext';

const Layout = () => {
    const [ curSummonerId, summonerDispatch ] = useReducer(sumIdReducer, ""); // SOLO LA RIOT ID ("nombre/id")
    
    return (
        <SummonerIdContext.Provider value={{ summonerId: curSummonerId, dispatch: summonerDispatch }}>
            <NavBar />
            
            <div>
                <Outlet />
            </div>
        </SummonerIdContext.Provider>
    )
}

export default Layout
