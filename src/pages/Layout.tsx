import NavBar from '../components/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import SearchUser from '../components/SearchUser';
import { useReducer } from 'react';
import languageReducer from '../components/languageReducer';
import LanguageContext from '../components/LanguageContext';

const Layout = () => {
    const [language, dispatch] = useReducer(languageReducer, "es");
    const navigate = useNavigate();
    const onSearch = (summonerId: string) => {
        const [gameName, tag] = summonerId.split("/");
        navigate(`/summoner/${gameName}/${tag}`);
    }

    console.log(language);

    return (
        <LanguageContext.Provider value={{ language, dispatch }}>
            <NavBar />
            <SearchUser summonerSubmit={(summonerId) => onSearch(summonerId)} />

            <div>
                <Outlet />
            </div>
        </LanguageContext.Provider>
    )
}

export default Layout;