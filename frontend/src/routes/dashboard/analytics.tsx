  import { createFileRoute } from '@tanstack/react-router'
  import { createChartsQueryOptions } from '@/features/dashboard/hooks/query-options';
  import { analyticSearchSchema } from '@/features/dashboard/schema'; 
  import { Analytics } from '@/features/dashboard/components/analytics';



  export const Route = createFileRoute('/dashboard/analytics')({
    component: RouteComponent,

    validateSearch:(search)=>analyticSearchSchema.parse(search),

    loaderDeps:({search})=>({
    currentP1:search.currentP1,
    currentP2:search.currentP2,
    currentP3: search.currentP3,
    motorCurrent: search.motorCurrent,
    motorSpeed: search.motorSpeed,
    motorVibration: search.motorVibration,
    tempMotor: search.tempMotor,
    tempVfd: search.tempVfd,
    voltageInput: search.voltageInput,
    voltageP1: search.voltageP1,
    voltageP2: search.voltageP2,
    voltageP3: search.voltageP3,
    }),

    loader:async ({context,deps})=>{
      const queries = Object.entries(deps).map(([metric,range])=> 
        context.queryClient.ensureQueryData(createChartsQueryOptions(metric,range))
      )
      await Promise.all(queries)
    },
  })

  function RouteComponent() {
    return <Analytics/>
  }


