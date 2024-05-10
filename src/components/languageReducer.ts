export interface LanguageAction {
    type: "CHANGE"
    newLeng: "es" | "en" | "fr";
}

const languageReducer = (language: "es" | "en" | "fr", action: LanguageAction) => {
    if (action.type === "CHANGE") {
        return(action.newLeng);
    }
    return language;
}

export default languageReducer;