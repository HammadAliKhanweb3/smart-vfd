import  { RealTimeDataCardsSkeleton } from './skeleton';
import type {  Subscription } from '@/graphql/graphql'
import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-01';



    interface DashboardDataProps{
        data:Subscription | undefined,
        loading:boolean,
        error?:Error
    }



    export function DashboardMain({data,loading}:DashboardDataProps) {
    
    console.log("inside Dashboard-Main");
  

    if (loading) {
       return( <RealTimeDataCardsSkeleton/>)
     }
      
    return (
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
                    
                    <div className='col-span-full grid gap-6 sm:grid-cols-4 md:max-lg:grid-cols-1'>
                        {Object.entries(data?.inputVoltage ?? {}).map(([key, value]) => {
                        //   const cardData = StatisticsCardData.find(card => card.title?.toLowerCase().includes(key.toLowerCase()));
                            return (
                                <StatisticsCard
                                    key={key}
                            //     icon={cardData?.icon}
                                    value={value !== null && value !== undefined ? value.toString() : 'N/A'}
                                //   title={cardData?.title}
                                // changePercentage={cardData?.changePercentage}
                                />
                            )
                        })}
                    </div>
        
                   
                </div>
    )
    }
