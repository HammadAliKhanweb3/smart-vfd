import { AnalyticsChart } from "./analytics-chart"
import { ChartWrapper } from "./chart-wrapper"





export const Analytics = () => {

  return (
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <ChartWrapper>
       <AnalyticsChart metric="currentP1" title="Current Phase-1" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="currentP2" title="Current Phase-2" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="currentP3" title="Current Phase-3" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="voltageP1" title="Voltage Phase-1" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="voltageP2" title="Voltage Phase-2" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="voltageP3" title="Voltage Phase-3" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="motorSpeed" title="Motor Speed" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="motorVibration" title="Motor Vibration" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="tempMotor" title="Motor Temperature" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="tempVfd" title="VFD Temperature" />
    </ChartWrapper>
    <ChartWrapper>
       <AnalyticsChart metric="voltageInput" title="Input Voltage" />
    </ChartWrapper>
    
 </div>
  )
}