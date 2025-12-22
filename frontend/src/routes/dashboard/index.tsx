import { DashboardMain } from '@/features/dashboard/components/dashboard-main'
import { useSensorsData } from '@/features/dashboard/hooks/useSensorsData';
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/dashboard/')({
    component: RouteComponent,
})

function RouteComponent() {
    const {data,loading,error}=useSensorsData();
    if (loading){
        
        console.log("log inside dashboard index");
         return <div>Loading...</div>
    }
    if (error){
        return <div>Error: {error.message}</div>
    }
    console.log(data);
    
    return <DashboardMain data={data} loading={loading} error={error}/>
}
