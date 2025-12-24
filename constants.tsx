
import { HourlyData, DemographicData, AgeGroup } from './types';

export const HOURLY_STATS: HourlyData[] = [
  { time: '06:00', views: 45, engagement: 62 },
  { time: '08:00', views: 82, engagement: 65 },
  { time: '10:00', views: 95, engagement: 68 },
  { time: '12:00', views: 110, engagement: 70 },
  { time: '14:00', views: 130, engagement: 72 },
  { time: '16:00', views: 152, engagement: 68 },
  { time: '18:00', views: 156, engagement: 66 },
  { time: '20:00', views: 125, engagement: 70 },
  { time: '22:00', views: 90, engagement: 65 },
];

export const DEMOGRAPHICS: DemographicData[] = [
  { name: 'Male 18-24', value: 15, fill: '#3B82F6' },
  { name: 'Male 25-34', value: 20, fill: '#2563EB' },
  { name: 'Male 35-44', value: 10, fill: '#1E40AF' },
  { name: 'Male 45+', value: 5, fill: '#1E3A8A' },
  { name: 'Female 18-24', value: 18, fill: '#EC4899' },
  { name: 'Female 25-34', value: 22, fill: '#DB2777' },
  { name: 'Female 35-44', value: 7, fill: '#BE185D' },
  { name: 'Female 45+', value: 3, fill: '#9D174D' },
];

export const AGE_DISTRIBUTION: AgeGroup[] = [
  { label: '18-24', percentage: 28, color: '#8B5CF6' },
  { label: '25-34', percentage: 35, color: '#3B82F6' },
  { label: '35-44', percentage: 22, color: '#10B981' },
  { label: '45+', percentage: 15, color: '#F97316' },
];
