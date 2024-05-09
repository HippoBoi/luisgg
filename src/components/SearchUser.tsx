import { Button, HStack, Input, InputGroup, InputRightElement, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import { FormEvent, useRef } from "react";

interface Props {
    summonerSubmit: (summonerId: string) => void;
}

const SearchUser = ({ summonerSubmit }: Props) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });

    const resetForm = (resetName: boolean, resetTag: boolean) => {
        if (nameRef.current && tagRef.current) {
            resetName && (nameRef.current.value = "");
            resetTag && (tagRef.current.value = "");
        }
    }
    const submitData = (event: FormEvent) => {
        event.preventDefault();

        if (nameRef.current && tagRef.current) {
            summonerSubmit(nameRef.current.value + "/" + tagRef.current.value);
            resetForm(true, true);
        }
    };

    return (
        <form onSubmit={(event) => submitData(event)}>
        <VStack marginTop={"90px"}>
            <Text style={textStyles.textStyles.title} as={"i"}>
                    Buscar invocador:
            </Text>

            <HStack marginLeft={"10px"} spacing={"15px"} justifyContent={"space-between"}>
                <Text style={textStyles.textStyles.title} as={"i"}>
                    Nombre:
                </Text>

                <InputGroup>
                    <Input 
                    ref={nameRef}
                    variant={"filled"} 
                    placeholder='"KHN Clean..."' />
                    {!isScreenSmall && (
                        <InputRightElement>
                            <Button fontSize={"13px"} color={"gray"} bg={"transparent"} onClick={() => resetForm(true, false)}>X</Button>
                        </InputRightElement>
                    )}
                </InputGroup>


                <Text marginLeft={"20px"} style={textStyles.textStyles.title} as={"i"}>
                    TAG:
                </Text>

                <InputGroup marginRight={"90px"}>
                    <Input 
                    ref={tagRef}
                    variant={"filled"} 
                    placeholder='"KHN..."' />
                    {!isScreenSmall && (
                        <InputRightElement>
                            <Button fontSize={"13px"} color={"gray"} bg={"transparent"} onClick={() => resetForm(false, true)}>X</Button>
                        </InputRightElement>
                    )}
                </InputGroup>
            </HStack>

            <Button type="submit">Search</Button>
        </VStack>
        </form>
    );
};

export default SearchUser;
