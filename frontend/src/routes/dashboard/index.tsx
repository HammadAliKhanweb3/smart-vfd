import { dashboardMain } from '@/features/dashboard/components/dashboard-main'
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/dashboard/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <dashboardMain/>
}
