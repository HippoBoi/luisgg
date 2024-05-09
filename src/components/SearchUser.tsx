import { Button, HStack, Input, InputGroup, InputRightElement, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
    summonerSubmit: (summonerId: string) => void;
}

const SearchUser = ({ summonerSubmit }: Props) => {
    const { register, handleSubmit, resetField } = useForm()
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });

    const submitData = (event: FieldValues) => {
        summonerSubmit(event.gameName + "/" + event.tag);
    };

    return (
        <form onSubmit={handleSubmit(data => submitData(data))}>
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

            <Button type="submit">Search</Button>
        </VStack>
        </form>
    );
};

export default SearchUser;
