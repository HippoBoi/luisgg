export interface LanguageAction {
    type: "CHANGE"
    newLeng: string;
}

const languageReducer = (language: string, action: LanguageAction) => {
    if (action.type === "CHANGE") {
        return(action.newLeng);
    }
    return language;
}

export default languageReducer;