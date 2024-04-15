import { extendTheme } from "@chakra-ui/react";

const textStyles = extendTheme({
    textStyles: {
        title: {
            fontSize: ["xl"],
            fontWeight: ["bold"]
        }
    }
});

export default textStyles;