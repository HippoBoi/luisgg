import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GridTest from "./components/GridTest";
import SearchUser from "./components/SearchUser";
import { useState } from "react";

function App() {
    const [ curSummonerId, setCurSummonerId ] = useState("KHN Hippo/LAS"); // SOLO LA RIOT ID del summoner ("nombre/id")

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
                        area izquierda
                    </GridItem>
                </Show>
                
                <GridItem area={"main"}>
                    <VStack>
                        <SearchUser summonerSubmit={(summonerId) => setCurSummonerId(summonerId)} />
                        <GridTest summonerId={curSummonerId} />
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