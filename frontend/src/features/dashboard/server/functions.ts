import { analyticsQuery } from "./queries"
import { fetchGraphQl } from "@/lib/graphql"


export const getAnalyticsData = (metric:string,range:string) => (
fetchGraphQl(analyticsQuery,{
    deviceId:"vfd",
    metric,
    range
})
)