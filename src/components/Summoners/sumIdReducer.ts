export interface SummonerIdAction {
    type: "CHANGE";
    newId: string;
}

const sumIdReducer = (summonerId: string, action: SummonerIdAction) => {
    if (action.type === "CHANGE") {
        summonerId = action.newId;
    }

    return summonerId;
}

export default sumIdReducer;