import { extendTheme } from "@chakra-ui/react";

const textStyles = extendTheme({
    textStyles: {
        title: {
            fontSize: ["xl"],
            fontWeight: ["bold"]
        },
        cardBody: {
            fontSize: ["13px"],
            fontStyle: ["italic"],
            fontWeight: ["bold"],
            whiteSpace: "nowrap"
        }
    }
});

export default textStyles;