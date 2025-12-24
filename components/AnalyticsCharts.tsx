
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';
import { HOURLY_STATS, DEMOGRAPHICS } from '../constants';

export const HourlyChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800">Hourly Views & Engagement</h3>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button className="px-4 py-1 text-sm font-semibold rounded-md bg-purple-100 text-purple-700">Today</button>
          <button className="px-4 py-1 text-sm font-semibold text-gray-500">Week</button>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={HOURLY_STATS}>
            <defs>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="views" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorViews)" 
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="engagement" 
              stroke="#EC4899" 
              strokeWidth={3}
              dot={{ r: 4, fill: '#EC4899' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-4 mt-2 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-1 bg-purple-500 rounded-full" />
          <span className="text-xs text-gray-500">Views per Hour</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-1 bg-pink-500 rounded-full" />
          <span className="text-xs text-gray-500">Engagement Rate %</span>
        </div>
      </div>
    </div>
  );
};

export const DemographicsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800">Audience Demographics</h3>
        <div className="flex gap-4">
           <div className="flex items-center gap-1">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-xs text-gray-400">Male</span>
           </div>
           <div className="flex items-center gap-1">
             <div className="w-2 h-2 rounded-full bg-pink-500" />
             <span className="text-xs text-gray-400">Female</span>
           </div>
        </div>
      </div>
      
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DEMOGRAPHICS}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {DEMOGRAPHICS.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mt-4">
        {DEMOGRAPHICS.map((d, i) => (
          <div key={i} className="flex items-center gap-1 overflow-hidden">
            <div className="min-w-[8px] h-2 rounded-full" style={{ backgroundColor: d.fill }} />
            <span className="text-[10px] text-gray-500 whitespace-nowrap truncate">{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
