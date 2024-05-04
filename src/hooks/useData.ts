import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useData = <T>(endpoint: string, dataKey: string) => {
    const query = useQuery<T, Error>({
        queryKey: [dataKey],
        queryFn: () => 
            apiClient.get<T>(endpoint)
            .then((res) => res.data)
    });

    return(query);
};

export default useData;