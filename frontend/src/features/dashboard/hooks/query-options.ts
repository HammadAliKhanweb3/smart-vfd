import { queryOptions } from "@tanstack/react-query";
import { getAnalyticsData } from "../server/functions";



export const createChartsQueryOptions = (metric:string,range:string)=>
(
    queryOptions({
        queryKey:["Analytics",metric,range],
        queryFn:()=>getAnalyticsData(metric,range),
        staleTime:1000*10
    })
)