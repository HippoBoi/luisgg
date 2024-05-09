import { Button, Center, Text, VStack } from "@chakra-ui/react"
import textStyles from "./TextStyles"
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <Center marginTop={"50px"} paddingX={"20px"}>
            <VStack>
                <Text style={textStyles.textStyles.title} fontSize={"70px"} color={"red.100"}>Sorry!</Text>
                <Text as={"b"} fontSize={"20px"} color={"pink.300"}>
                    {isRouteErrorResponse(error) 
                    ? "Invalid URL. Make sure the summoner you are looking for exists."
                    : "An unexpected error ocurred. Please try again."}
                </Text>
                <Button marginTop={"20px"} padding={"25px"} color={"purple.200"} onClick={() => navigate("/")}>
                    Go Back
                </Button>
            </VStack>
        </Center>
    );
}

export default ErrorPage
