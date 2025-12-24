
import React from 'react';
import { AGE_DISTRIBUTION } from '../constants';

export const AgeDistribution: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 mb-6">
      <h3 className="font-bold text-gray-800 mb-6">Age Distribution</h3>
      <div className="space-y-6">
        {AGE_DISTRIBUTION.map((age, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-medium">{age.label}</span>
              <span className="text-gray-800 font-bold">{age.percentage}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full" 
                style={{ width: `${age.percentage}%`, backgroundColor: age.color }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EngagementMetrics: React.FC = () => {
  const metrics = [
    { label: 'Noticed', value: '89%', color: 'bg-green-50 text-green-600', dot: 'bg-green-200' },
    { label: 'Engaged', value: '67%', color: 'bg-blue-50 text-blue-600', dot: 'bg-blue-200' },
    { label: 'Impressed', value: '43%', color: 'bg-purple-50 text-purple-600', dot: 'bg-purple-200' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 mb-6">
      <h3 className="font-bold text-gray-800 mb-4">Engagement Metrics</h3>
      <div className="space-y-3">
        {metrics.map((m, i) => (
          <div key={i} className={`flex items-center justify-between p-3 rounded-xl ${m.color.split(' ')[0]}`}>
             <div className="flex items-center gap-3">
               <div className={`w-8 h-8 rounded-lg ${m.dot}`} />
               <span className="text-sm font-semibold text-gray-600">{m.label}</span>
             </div>
             <span className={`text-sm font-bold ${m.color.split(' ')[1]}`}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CampaignActions: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 relative overflow-hidden group">
      <h3 className="font-bold text-gray-800 mb-4">Campaign Actions</h3>
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-95">
        Export Analytics
      </button>
    </div>
  );
};
