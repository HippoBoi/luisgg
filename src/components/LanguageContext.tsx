import { Dispatch } from "react";
import React from "react";
import { LanguageAction } from "./languageReducer";

interface LanguateListType {
    language: "es" | "en" | "fr";
    dispatch: Dispatch<LanguageAction>
}

const LanguageContext = React.createContext<LanguateListType>({} as LanguateListType);

export default LanguageContext;