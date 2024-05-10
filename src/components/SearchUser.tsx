import { Button, HStack, Input, InputGroup, InputRightElement, Select, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import { FieldValues, useForm } from "react-hook-form";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import RegionContext from "./RegionContext";

interface Props {
    summonerSubmit: (summonerId: string) => void;
}

const SearchUser = ({ summonerSubmit }: Props) => {
    const { register, handleSubmit, resetField } = useForm()
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });
    const { dispatch } = useContext(RegionContext);

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

            <HStack marginRight={"20px"} spacing={"15px"} justifyContent={"space-between"}>
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

                <InputGroup marginRight={"20px"}>
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

                <Text style={textStyles.textStyles.title} as={"i"}>
                    Region:
                </Text>
                <Select onChange={(event) => dispatch({type: "CHANGE", newRegion: event.target.value})}>
                    <option value="LA2">LAS</option>
                    <option value="LA1">LAN</option>
                    <option value="NA1">NA</option>
                    <option value="BR1">BR</option>
                    <option value="EUW1">EUW</option>
                    <option value="EUN1">EUN</option>
                    <option value="TR1">TR</option>
                    <option value="RU">RU</option>
                    <option value="KR">KR</option>
                    <option value="JP1">JP</option>
                    <option value="OC1">OC</option>
                    <option value="PH2">PH2</option>
                    <option value="TH2">TH2</option>
                    <option value="SG2">SG2</option>
                    <option value="TW2">TW2</option>
                    <option value="VN2">VN2</option>
                </Select>
            </HStack>

            <Button type="submit">{textByLanguage[language][2]}</Button>
        </VStack>
        </form>
    );
};

export default SearchUser;
