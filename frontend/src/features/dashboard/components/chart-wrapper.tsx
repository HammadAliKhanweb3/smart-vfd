import React, { Suspense } from "react";
import {ErrorBoundary} from "react-error-boundary"
import { AnalyticsCardsSkeleton } from "./skeleton";
import ErrorState from "@/features/shared/components/ErrorState";






export const ChartWrapper = ({children}:{children:React.ReactNode})=>{
    return(
        <div>
            <ErrorBoundary fallback={<ErrorState title="Error" description="Something Went Wrong"/>}>
               <Suspense fallback={<AnalyticsCardsSkeleton/>}>
                {children}
               </Suspense>
            </ErrorBoundary>
        </div>
    )

}