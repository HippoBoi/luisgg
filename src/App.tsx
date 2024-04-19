import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GridTest from "./components/GridTest";
import SearchUser from "./components/SearchUser";
import { useState } from "react";

function App() {
    const [curUserName, setCurUserName] = useState<string>("");

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
                        <SearchUser />
                        <GridTest></GridTest>
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