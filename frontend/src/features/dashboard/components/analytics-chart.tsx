import React from "react"
  import { useSuspenseQuery } from "@tanstack/react-query"
import { Area, AreaChart,CartesianGrid,XAxis, YAxis } from "recharts"
  import { createChartsQueryOptions } from "../hooks/query-options"
  import type { ChartConfig } from "@/components/ui/chart"
    import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
   import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


  import { Route } from "@/routes/dashboard/analytics"



  const chartConfig = {
    value: {
      label: "Current (Amps)",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig

  interface ChartProps {  
    metric:string,
    title:string
  }

  export function AnalyticsChart({metric,title}:ChartProps) {

  const navigate = Route.useNavigate()
  const search = Route.useSearch()

  const currentRange = search[metric as keyof typeof search] 
  console.log(currentRange);

  const {data} = useSuspenseQuery(createChartsQueryOptions(metric,currentRange))  

  const handleRangeChange = (newRange: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        [metric]: newRange, // Only update this one key!
      }),
      // 'replace: true' keeps history clean (optional)
      replace: true, 
    });
  };
  

    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
                 <CardTitle>{title}</CardTitle>
          <CardDescription>
            Historical Data of {title}
          </CardDescription>
            </div>
            <Select value={currentRange} onValueChange={(value) => handleRangeChange(value)}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          > 
            <SelectValue placeholder="Last 7 Days" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="-90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="-30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="-7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
            <SelectItem value="-24h" className="rounded-lg">
              Last 24 hours
            </SelectItem>
          </SelectContent>
        </Select>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={data.getAnalyticsData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
                  }}
              />
              <YAxis
                dataKey="value"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={40}
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="value"
                type="natural"
                fill="var(--color-value)"
                fillOpacity={0.4}
                stroke="var(--color-value)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>

      </Card>
    )
  }
