import { queryOptions } from "@tanstack/react-query";


export const createChartsQueryOptions = (metric:string)=>
(
    queryOptions({
        queryKey:["inputVoltage"],
        queryFn:getInputVoltage(),
        staleTime:1000*10
    })
)