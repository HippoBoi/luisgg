import { Dispatch } from "react";
import { SummonerIdAction } from "./sumIdReducer";
import React from "react";

interface SummonerIdType {
    summonerId: string;
    dispatch: Dispatch<SummonerIdAction>;
}

const summonerIdContext = React.createContext<SummonerIdType>({} as SummonerIdType);

export default summonerIdContext;