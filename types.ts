
export interface HourlyData {
  time: string;
  views: number;
  engagement: number;
}

export interface DemographicData {
  name: string;
  value: number;
  fill: string;
}

export interface AgeGroup {
  label: string;
  percentage: number;
  color: string;
}

export interface Metric {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral';
  color: string;
}
