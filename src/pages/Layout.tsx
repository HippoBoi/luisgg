import NavBar from '../components/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import SearchUser from '../components/SearchUser';

const Layout = () => {
    const navigate = useNavigate();
    const onSearch = (summonerId: string) => {
        const [gameName, tag] = summonerId.split("/");
        navigate(`/summoner/${gameName}/${tag}`);
    }

    return (
        <>
            <NavBar />
            <SearchUser summonerSubmit={(summonerId) => onSearch(summonerId)} />

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;