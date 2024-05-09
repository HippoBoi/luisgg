const useQueueInfo = (queueId: number) => {
    switch(queueId) {
        case 0:
            return("Custom");
        case 430:
            return("Blind Pick");
        case 420:
            return("Solo Queue");
        case 440:
            return("Flex");
        case 700:
            return("Clash");
        case 1700:
                return("Arena");
        case 1710:
            return("Arena");
        default:
            return ("Game Mode");
    }
}

export default useQueueInfo
