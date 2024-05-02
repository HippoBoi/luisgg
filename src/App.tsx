import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SummonerInfo from "./components/Summoners/SummonerInfo";
import SearchUser from "./components/SearchUser";
import { useState } from "react";
import { summonerAccount } from "./hooks/useSummoner";
import SummonersQuickAccess from "./components/Summoners/SummonersQuickAccess";
import SummonersList from "./components/Summoners/SummonersList";
import { API_HOST } from "./config";

function App() {
    const [ curSummonerId, setCurSummonerId ] = useState(""); // SOLO LA RIOT ID ("nombre/id")
    const [ summonersList, setSummonersList ] = useState<summonerAccount[]>([]);

    if (API_HOST) {
        console.log(API_HOST.toString);
    }

    return(
        <div>
            <Grid templateAreas={{
                base: `"nav"
                      "main"`,

                md: `"nav   nav"
                    "aside main"`,
                    
                lg: `"nav   nav  nav"
                    "aside main right"`
            }}>
                <GridItem area={"nav"}>
                    <NavBar />
                </GridItem>

                <Show above="md">
                    <GridItem area={"aside"}>
                        <SummonersList summonersList={summonersList} />
                    </GridItem>
                </Show>
                
                <GridItem area={"main"}>
                    <VStack paddingBottom={"30px"}>
                        <SearchUser summonerSubmit={(summonerId) => setCurSummonerId(summonerId)} />
                        <SummonerInfo summonerId={curSummonerId} onAdd={(summoner) => setSummonersList([...summonersList, summoner])} />
                    </VStack>
                </GridItem>

                <Show above="lg">
                    <GridItem area={"right"}>
                        <SummonersQuickAccess summonersList={summonersList} />
                    </GridItem>
                </Show>
            </Grid>
        </div>
    );
}

export default App;