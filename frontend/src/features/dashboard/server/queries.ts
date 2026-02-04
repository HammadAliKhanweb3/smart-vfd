import { graphql } from '@/graphql';

export const analyticsQuery = graphql(`
  query GetAnalytics($deviceId: String!, $metric: String!, $range: String!) {
    getAnalyticsData(deviceId: $deviceId, metricName: $metric, range: $range) {
      time
      value
    }
  }
`);