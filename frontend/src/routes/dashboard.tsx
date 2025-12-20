import { Layout } from "@/features/dashboard/components/dashboard-layout"
import { createFileRoute } from "@tanstack/react-router"



export const Route = createFileRoute('/dashboard')({
    component: DashboardLayout,
    pendingComponent: DashboardSkeleton,
    
})

function DashboardLayout() {
  
    return <Layout/>
}


function DashboardSkeleton(){
    return <div>Loading...</div>
}