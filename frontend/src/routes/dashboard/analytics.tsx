import { Charts } from '@/features/dashboard/components/charts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/analytics')({
  component: RouteComponent,
  loader:async ()=>{
     
  },
})

function RouteComponent() {
  return <Charts/>
}


