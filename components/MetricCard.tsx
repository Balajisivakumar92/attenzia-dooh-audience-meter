
import React from 'react';

interface MetricCardProps {
  iconBg: string;
  title: string;
  value: string | number;
  subLabel?: string;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral';
  footer?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  iconBg, title, value, subLabel, trend, trendType, footer 
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${iconBg} opacity-20`} />
          <span className="text-gray-500 font-medium text-sm">{title}</span>
        </div>
        {trend && (
          <span className={`text-xs font-semibold ${
            trendType === 'positive' ? 'text-green-500' : 
            trendType === 'negative' ? 'text-red-500' : 'text-emerald-600'
          }`}>
            {trend}
          </span>
        )}
      </div>
      
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-800">{value}</span>
          {subLabel && <span className="text-gray-400 text-sm font-medium">{subLabel}</span>}
        </div>
        {footer && (
          <p className="text-gray-400 text-xs mt-2 font-medium">{footer}</p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
