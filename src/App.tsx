import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
    return(
        <div>
            <Grid templateAreas={{
                base: `"nav"
                       "nav2"
                      "main"`,

                md: `"nav   nav"
                    "aside   nav2"
                    "aside main"`,
                    
                lg: `"nav   nav  nav"
                    "aside  nav2  right"
                    "aside main right"`
            }}>
                <GridItem area={"nav"}>
                    <NavBar />
                </GridItem>

                <GridItem bg={"purple"} area={"nav2"}>
                    soy el nav 2!11!!
                </GridItem>

                <Show above="md">
                    <GridItem bg={"blue"} area={"aside"}>
                        soy el aside
                    </GridItem>
                </Show>
                
                <GridItem bg={"yellow"} area={"main"}>
                    soy el main principal
                </GridItem>

                <Show above="lg">
                    <GridItem bg={"green"} area={"right"}>
                        pues yo soy el right
                    </GridItem>
                </Show>
            </Grid>
        </div>
    );
}

export default App;