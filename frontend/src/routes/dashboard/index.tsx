import { DashboardMain, SensorDataError, SensorDataLoader } from '@/features/dashboard/components/dashboard-main'
import { useSensorsData } from '@/features/dashboard/hooks/useSensorsData';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';
import {ErrorBoundary} from "react-error-boundary"


export const Route = createFileRoute('/dashboard/')({
    component: RouteComponent,
})

function RouteComponent() {
    const {data,loading,error}=useSensorsData();
  
    console.log(data);
    
    return (
    
   <div>
    <Suspense fallback={<SensorDataLoader/>}>
        <ErrorBoundary fallback={<SensorDataError/>}>
             <DashboardMain 
    data={data}
     loading={loading}
      error={error}/>
        </ErrorBoundary>

    </Suspense>
   
</div>


    )
}

