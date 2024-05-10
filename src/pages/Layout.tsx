import NavBar from '../components/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import SearchUser from '../components/SearchUser';
import { useReducer } from 'react';
import languageReducer from '../components/languageReducer';
import LanguageContext from '../components/LanguageContext';
import RegionContext from '../components/RegionContext';
import regionReducer from '../components/regionReducer';

const Layout = () => {
    const [language, dispatch] = useReducer(languageReducer, "es");
    const [region, regionDispatch] = useReducer(regionReducer, "LA2");
    const navigate = useNavigate();
    const onSearch = (summonerId: string) => {
        const [gameName, tag] = summonerId.split("/");
        navigate(`/summoner/${gameName}/${tag}`);
    }

    return (
        <RegionContext.Provider value={{ region, dispatch: regionDispatch }}>
        <LanguageContext.Provider value={{ language, dispatch }}>
            <NavBar />
            <SearchUser summonerSubmit={(summonerId) => onSearch(summonerId)} />

            <div>
                <Outlet />
            </div>
        </LanguageContext.Provider>
        </RegionContext.Provider>
    )
}

export default Layout;