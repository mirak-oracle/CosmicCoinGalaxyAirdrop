import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Globe, Home, CheckSquare, Gift, Users, Menu, X, ExternalLink, Copy, MessageCircle, Share2 } from 'lucide-react';

export default function CosmicGalaxyDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Sample user data - would come from your backend
  const userData = {
    balance: 54520,
    hashRate: 1.26,
    activeTime: '24h 12m',
    earnings: 12.45,
    referralCount: 5,
    completedTasks: 7,
    totalTasks: 10,
    referralCode: 'COSMIC123'
  };

  // Sample tasks data
  const tasks = [
    { id: 1, title: 'Follow on Twitter', reward: 100, completed: true },
    { id: 2, title: 'Join Telegram Group', reward: 150, completed: true },
    { id: 3, title: 'Join Discord Server', reward: 200, completed: false },
    { id: 4, title: 'Share Referral Code', reward: 300, completed: false },
    { id: 5, title: 'Complete KYC', reward: 500, completed: false }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-lg border-0 p-6 rounded-2xl">
              <div className="relative">
                <div className="absolute inset-0 opacity-10">
                  <Globe className="w-full h-full text-gray-400" />
                </div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="text-yellow-500 text-2xl font-bold mb-2">₭{userData.balance}</div>
                    <div className="text-4xl font-bold text-white mb-2">{userData.hashRate} kh/s</div>
                    <div className="text-gray-400">BALANCE</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="text-sm text-gray-400 mb-1">Active Time</div>
                      <div className="text-white font-semibold">{userData.activeTime}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="text-sm text-gray-400 mb-1">Earnings</div>
                      <div className="text-white font-semibold">₭{userData.earnings}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="text-sm text-gray-400 mb-1">Tasks Complete</div>
                      <div className="text-white font-semibold">{userData.completedTasks}/{userData.totalTasks}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="text-sm text-gray-400 mb-1">Referrals</div>
                      <div className="text-white font-semibold">{userData.referralCount}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <button className="w-full py-4 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition-colors">
                Claim Rewards
              </button>
              <button className="w-full py-4 px-6 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors">
                View Tasks
              </button>
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Available Tasks</h2>
            {tasks.map(task => (
              <Card key={task.id} className="bg-white/5 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${task.completed ? 'bg-green-500' : 'bg-gray-500'}`} />
                  <span className="text-white">{task.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">₭{task.reward}</span>
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'rewards':
        return (
          <div className="space-y-4">
            <Card className="bg-white/5 p-6 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Total Earnings</h2>
              <div className="text-4xl font-bold text-yellow-500 mb-4">₭{userData.balance}</div>
              <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition-colors">
                Claim All Rewards
              </button>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/5 p-4 rounded-xl">
                <div className="text-gray-400 mb-1">Task Rewards</div>
                <div className="text-xl font-bold text-white">₭1,250</div>
              </Card>
              <Card className="bg-white/5 p-4 rounded-xl">
                <div className="text-gray-400 mb-1">Referral Rewards</div>
                <div className="text-xl font-bold text-white">₭750</div>
              </Card>
            </div>
          </div>
        );

      case 'invite':
        return (
          <div className="space-y-4">
            <Card className="bg-white/5 p-6 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-4">Your Referral Code</h2>
              <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg">
                <input 
                  type="text" 
                  value={userData.referralCode} 
                  readOnly 
                  className="bg-transparent text-white flex-1 outline-none"
                />
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Copy className="w-4 h-4 text-white" />
                </button>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors">
                <Share2 className="w-4 h-4" />
                Share on Social
              </button>
              <button className="flex items-center justify-center gap-2 w-full py-3 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" />
                Join Community
              </button>
            </div>

            <Card className="bg-white/5 p-4 rounded-xl">
              <div className="text-gray-400 mb-2">Total Referrals</div>
              <div className="text-2xl font-bold text-white">{userData.referralCount}</div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out z-30`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="text-xl font-bold text-white">Cosmic Galaxy</div>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="space-y-2">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
              { id: 'rewards', icon: Gift, label: 'Rewards' },
              { id: 'invite', icon: Users, label: 'Invite' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-400 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full" />
            <span className="text-gray-400 text-sm">Online</span>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}
