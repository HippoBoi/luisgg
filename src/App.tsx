import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SummonerInfo from "./components/Summoners/SummonerInfo";
import SearchUser from "./components/SearchUser";
import { useState } from "react";
import { summonerAccount } from "./hooks/useSummoner";
import SummonersQuickAccess from "./components/Summoners/SummonersQuickAccess";

function App() {
    const [ curSummonerId, setCurSummonerId ] = useState(""); // SOLO LA RIOT ID del summoner ("nombre/id")
    const [ summonersList, setSummonersList ] = useState<summonerAccount[]>([]);

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
                        <SummonersQuickAccess summonersList={summonersList} />
                    </GridItem>
                </Show>
                
                <GridItem area={"main"}>
                    <VStack>
                        <SearchUser summonerSubmit={(summonerId) => setCurSummonerId(summonerId)} />
                        <SummonerInfo summonerId={curSummonerId} />
                    </VStack>
                </GridItem>

                <Show above="lg">
                    <GridItem area={"right"}>
                        area derecha xdxd
                    </GridItem>
                </Show>
            </Grid>
        </div>
    );
}

export default App;