"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/features/shared/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/features/shared/components/ui/chart"

export const description = "Current Histotircal Data"

const chartData = [
  { month: "January", current: 186 },
  { month: "February", current: 305 },
  { month: "March", current: 237 },
  { month: "April", current: 73 },
  { month: "May", current: 209 },
  { month: "June", current: 214 },
]

const chartConfig = {
  current: {
    label: "current ",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function Charts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Currnent Chart</CardTitle>
        <CardDescription>
          Showing Historical Current Data for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="current"
              type="natural"
              fill="var(--color-current)"
              fillOpacity={0.4}
              stroke="var(--color-current)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
