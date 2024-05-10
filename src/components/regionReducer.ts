export interface RegionAction {
    type: "CHANGE"
    newRegion: string;
}

const regionReducer = (region: string, action: RegionAction) => {
    if (action.type === "CHANGE") {
        return(action.newRegion);
    }
    return region;
}

export default regionReducer;