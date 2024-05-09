import { Select } from "@chakra-ui/react"
import { useContext } from "react"
import LanguageContext from "./LanguageContext"

const LanguageList = () => {
    const {language, dispatch} = useContext(LanguageContext);

    const languageChanged = (lang: string) => {
        dispatch({type: "CHANGE", newLeng: lang})
    }

    return (
        <Select defaultValue={language} onChange={(event) => languageChanged(event.target.value)}>
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
        </Select>
    );
}

export default LanguageList;