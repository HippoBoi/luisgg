import { Button, HStack, Input, InputGroup, InputRightElement, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import { FieldValues, useForm } from "react-hook-form";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";

interface Props {
    summonerSubmit: (summonerId: string) => void;
}

const SearchUser = ({ summonerSubmit }: Props) => {
    const { register, handleSubmit, resetField } = useForm()
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });

    const submitData = (event: FieldValues) => {
        summonerSubmit(event.gameName + "/" + event.tag);
    };

    const { language } = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "Buscar Invocador:",
            "Nombre:",
            "Buscar"
        ],
        "en": [
            "Search Summoner:",
            "Name:",
            "Search"
        ],
        "fr": [
            "Chercher Invocateur:",
            "Nom:",
            "Chercher"
        ]
    };

    return (
        <form onSubmit={handleSubmit(data => submitData(data))}>
        <VStack marginTop={"90px"}>
            <Text style={textStyles.textStyles.title} as={"i"}>
                    {textByLanguage[language][0]}
            </Text>

            <HStack marginLeft={"10px"} spacing={"15px"} justifyContent={"space-between"}>
                <Text style={textStyles.textStyles.title} as={"i"}>
                    {textByLanguage[language][1]}
                </Text>

                <InputGroup>
                    <Input 
                    {...register("gameName", { required: true, minLength: 1 })}
                    variant={"filled"} 
                    placeholder='"KHN Clean..."' />
                    {!isScreenSmall && (
                        <InputRightElement>
                            <Button fontSize={"13px"} color={"gray"} bg={"transparent"} onClick={() => resetField("gameName")}>X</Button>
                        </InputRightElement>
                    )}
                </InputGroup>


                <Text marginLeft={"20px"} style={textStyles.textStyles.title} as={"i"}>
                    TAG:
                </Text>

                <InputGroup marginRight={"90px"}>
                    <Input 
                    {...register("tag", { required: true, minLength: 1 })}
                    variant={"filled"} 
                    placeholder='"KHN..."' />
                    {!isScreenSmall && (
                        <InputRightElement>
                            <Button fontSize={"13px"} color={"gray"} bg={"transparent"} onClick={() => resetField("tag")}>X</Button>
                        </InputRightElement>
                    )}
                </InputGroup>
            </HStack>

            <Button type="submit">{textByLanguage[language][2]}</Button>
        </VStack>
        </form>
    );
};

export default SearchUser;
