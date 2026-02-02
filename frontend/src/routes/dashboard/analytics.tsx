import { createFileRoute } from '@tanstack/react-router'
import { Charts } from '@/features/dashboard/components/charts'

export const Route = createFileRoute('/dashboard/analytics')({
  component: RouteComponent,
  loader:async ()=>{
     
  },
})

function RouteComponent() {
  return <Charts/>
}


