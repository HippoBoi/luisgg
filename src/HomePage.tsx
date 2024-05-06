import { Grid, GridItem, VStack } from "@chakra-ui/react";
import SummonerInfo from "./components/Summoners/SummonerInfo";
import { useContext } from "react";
import summonerIdContext from "./components/Summoners/SummonerIdContext";

function App() {
    const { summonerId: curSummonerId } = useContext(summonerIdContext);

    return(
        <div>
            <Grid templateAreas={{
                base: `"main"`,

                md: `"aside main"`,
                    
                lg: `"aside main right"`
            }}>
                
                <GridItem area={"main"}>
                    <VStack paddingBottom={"30px"}>
                        <SummonerInfo summonerId={curSummonerId} />
                    </VStack>
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;