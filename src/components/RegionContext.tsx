import { Dispatch } from "react";
import React from "react";
import { RegionAction } from "./regionReducer";

interface RegionContextType {
    region: string;
    dispatch: Dispatch<RegionAction>;
}

const RegionContext = React.createContext<RegionContextType>({} as RegionContextType);

export default RegionContext;