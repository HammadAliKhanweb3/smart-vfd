import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "@/features/dashboard/components/dashboard-layout"



export const Route = createFileRoute('/dashboard')({
    component: DashboardLayout,
    pendingComponent: DashboardSkeleton,
})

function DashboardLayout() {
    return <Layout/>
}


export function DashboardSkeleton() {
  return (
   <div>Loading...</div>
  )
}
