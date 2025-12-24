
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Users, Clock, DollarSign, Bell, 
  ChevronRight, MapPin, Globe, LayoutDashboard 
} from 'lucide-react';
import MetricCard from './components/MetricCard';
import { HourlyChart, DemographicsChart } from './components/AnalyticsCharts';
import LiveView from './components/LiveView';
import { AgeDistribution, EngagementMetrics, CampaignActions } from './components/SidebarMetrics';

const App: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: true }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pb-12 relative">
      {/* Demo Watermark */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <div className="transform rotate-[-15deg] opacity-20">
          <span className="text-6xl md:text-8xl font-black text-red-600 tracking-wider select-none">
            ONLY DEMO
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white px-8 py-6 shadow-sm mb-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="./letter-a.png"
              alt="Attenzia Logo" 
              className="w-12 h-12 rounded-xl shadow-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">Attenzia DOOH Audience Meter</h1>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 font-medium">Digital Billboard Analytics</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-emerald-500 font-bold">Billboard Active</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-1">
            <div className="flex items-center gap-4 text-gray-500 text-sm">
               <div className="flex items-center gap-1">
                 <MapPin className="w-4 h-4" />
                 <span>Location: <span className="text-gray-800 font-semibold">Near Pothys Hyper, T.Nagar</span></span>
               </div>
               <div className="relative">
                 <Bell className="w-5 h-5" />
                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
               </div>
            </div>
            <span className="text-lg font-bold text-gray-700 font-mono tracking-widest mt-1">{time}</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard 
            title="Total Views Today" 
            value="4,010" 
            subLabel="views"
            trend="+18%"
            trendType="positive"
            footer="vs. yesterday: 1,056"
            iconBg="bg-purple-500"
          />
          <MetricCard 
            title="Engagement Rate" 
            value="92.1" 
            subLabel="%"
            trend="● High"
            trendType="neutral"
            footer="Avg dwell: 4.2 seconds"
            iconBg="bg-pink-500"
          />
          <MetricCard 
            title="Peak Hour" 
            value="156" 
            subLabel="views/hour"
            trend="17:00-18:00"
            footer="Rush hour traffic"
            iconBg="bg-orange-400"
          />
          <MetricCard 
            title="ROI Estimate" 
            value="$4.2" 
            subLabel="per 1K views"
            trend="+5.2%"
            trendType="positive"
            footer="Campaign value today"
            iconBg="bg-green-400"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-7">
            <HourlyChart />
          </div>
          <div className="lg:col-span-5">
            <DemographicsChart />
          </div>
        </div>

        {/* Lower Section (Live View + Distribution) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <LiveView />
          </div>
          <div className="lg:col-span-4 flex flex-col">
            <AgeDistribution />
            <EngagementMetrics />
            <CampaignActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
