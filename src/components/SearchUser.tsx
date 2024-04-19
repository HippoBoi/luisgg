import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import { FormEvent, useRef } from "react";

interface Props {
    summonerSubmit: (summonerId: string) => void;
}

const SearchUser = ({ summonerSubmit }: Props) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);

    const submitData = (event: FormEvent) => {
        event.preventDefault();

        if (nameRef.current && tagRef.current) {
            summonerSubmit(nameRef.current.value + "/" + tagRef.current.value);
        }
    };

    return (
        <form onSubmit={(event) => submitData(event)}>
        <VStack>
            <Text style={textStyles.textStyles.title} as={"i"}>
                    Buscar invocador:
            </Text>

            <HStack spacing={"20px"} height={"60px"} justifyContent={"space-between"}>
                <Text marginLeft={"20px"} style={textStyles.textStyles.title} as={"i"}>
                    Nombre:
                </Text>

                <Input 
                ref={nameRef}
                variant={"filled"} 
                placeholder='"Shugoshin..."' />


                <Text marginLeft={"40px"} style={textStyles.textStyles.title} as={"i"}>
                    TAG:
                </Text>

                <Input 
                ref={tagRef}
                marginRight={"60px"}
                variant={"filled"} 
                placeholder='"KHNS..."' />
            </HStack>

            <Button type="submit">Search</Button>
        </VStack>
        </form>
    );
};

export default SearchUser;
