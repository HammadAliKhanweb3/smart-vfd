import { DashboardMain } from '@/features/dashboard/components/dashboard-main'
import { useSensorsData } from '@/features/dashboard/hooks/useSensorsData';
import ErrorState from '@/features/shared/components/ErrorState';
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/dashboard/')({
    component: RouteComponent,
    errorComponent:()=><ErrorState title='Error' description='Something went wrong...'/>,

})

function RouteComponent() {
    const {data,loading,error}=useSensorsData();
   
  
    console.log(data);
    
    return (
             <DashboardMain 
               data={data}
               loading={loading}
               error={error}/>
    )
}

