import Skeleton from 'react-loading-skeleton'
import { Card } from '@/components/ui/card'
import 'react-loading-skeleton/dist/skeleton.css'
 
 
 export function RealTimeDataCardsSkeleton() {
  return (
    <div className="col-span-full grid gap-6 sm:grid-cols-4 md:max-lg:grid-cols-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <Card key={i} className="p-4 space-y-2">
          <Skeleton    height={12} width="50%" />
          <Skeleton height={28} width="70%" />
          <Skeleton height={10} width="40%" />
        </Card>
      ))}
    </div>
  )
}

export function AnalyticsCardsSkeleton (){
  return(
    <div className=''>
      {
      Array.from({length:6}).map((_,i)=>(
        <Card key={i} className='p-4 space-y-2'>
         <Skeleton height={14} width={"50%"}/>
         <Skeleton height={30} width={"80%"}/>
         <Skeleton height={10} width={"40%"}/>
        </Card>
      ))
    }
    </div>
  )
}