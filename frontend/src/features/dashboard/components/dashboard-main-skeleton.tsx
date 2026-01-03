   import { Card } from '@/features/shared/components/ui/card'
    import Skeleton from 'react-loading-skeleton'
 
 
 export function StatisticsCardsSkeleton() {
  return (
    <div className="col-span-full grid gap-6 sm:grid-cols-4 md:max-lg:grid-cols-1">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="p-4 space-y-2">
          <Skeleton height={12} width="50%" />
          <Skeleton height={28} width="70%" />
          <Skeleton height={10} width="40%" />
        </Card>
      ))}
    </div>
  )
}