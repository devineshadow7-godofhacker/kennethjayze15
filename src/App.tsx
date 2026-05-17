/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Users, 
  UserPlus, 
  Trophy, 
  Github, 
  Twitter, 
  Globe, 
  MapPin, 
  Link as LinkIcon, 
  Mail, 
  Calendar,
  Grid,
  Activity,
  Star,
  Settings,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Flame,
  Crown
} from 'lucide-react';
import { useState, useMemo } from 'react';

// Profile Picture Generated earlier
const PROFILE_IMAGE_URL = "/src/assets/images/anime_male_profile_1778995522623.png";

const UNDECILLION_FOLLOWERS = "752 Undecillion";
const ACHIEVEMENT_COUNT = 15473;

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  // Generate some mock badges for display
  const displayBadges = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => ({
      id: i,
      color: [`bg-blue-500`, `bg-purple-500`, `bg-amber-500`, `bg-emerald-500`, `bg-rose-500`, `bg-indigo-500`][i % 6],
      icon: [Trophy, ShieldCheck, BadgeCheck, Zap, Flame, Crown, Star][i % 7]
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Top Navigation Bar */}
      <nav className="border-b border-[#30363d] bg-[#161b22] px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Github className="w-8 h-8 text-white" />
            <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
              <span className="hover:text-white cursor-pointer px-2 py-1">Pulls</span>
              <span className="hover:text-white cursor-pointer px-2 py-1">Issues</span>
              <span className="hover:text-white cursor-pointer px-2 py-1">Marketplace</span>
              <span className="hover:text-white cursor-pointer px-2 py-1">Explore</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <input 
                type="text" 
                placeholder="Search or jump to..." 
                className="bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1 text-sm focus:w-64 transition-all outline-none focus:border-[#58a6ff]"
              />
            </div>
            <Settings className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#30363d]">
              <img src={PROFILE_IMAGE_URL} alt="Mini Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 lg:flex gap-8">
        {/* Left Column: Profile Info */}
        <aside className="lg:w-1/4 mb-8 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="relative group">
              <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-[#30363d] shadow-2xl">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Kenneth Jay Mapalad" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-[#161b22] border border-[#30363d] p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-bold text-white">Kenneth Jay Mapalad</h1>
              <h2 className="text-xl font-light text-[#8b949e]">kjmapalad • he/him</h2>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <p className="text-white font-medium">Architect of the Digital Undecillion. Creator of worlds, master of badges.</p>
              <button className="w-full bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] py-1.5 rounded-md text-sm font-semibold mt-2 transition-colors">
                Edit profile
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
              <div className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
                <Users className="w-4 h-4 opacity-70" />
                <span className="text-white">{UNDECILLION_FOLLOWERS}</span>
                <span className="text-[#8b949e]">followers</span>
              </div>
              <div className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
                <UserPlus className="w-4 h-4 opacity-70" />
                <span className="text-white">0</span>
                <span className="text-[#8b949e]">following</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-[#8b949e]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> <span>Philippines / Digital Ether</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> <span>kenneth@mapalad.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" /> <span className="text-[#58a6ff] hover:underline cursor-pointer">mapalad.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Twitter className="w-4 h-4" /> <span className="hover:text-[#58a6ff] cursor-pointer">@KJ_Mapalad</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#30363d]">
              <h3 className="font-semibold text-white mb-3">Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {displayBadges.slice(0, 12).map((badge) => (
                  <motion.div 
                    key={badge.id}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`p-1.5 rounded-full ${badge.color} bg-opacity-20 border border-white/10 cursor-help tooltip`}
                    title={`Achievement #${badge.id + 1}`}
                  >
                    <badge.icon className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
                <div className="p-1 px-2 rounded-full bg-[#21262d] border border-[#30363d] text-[10px] font-bold text-[#8b949e] flex items-center justify-center">
                  +{ACHIEVEMENT_COUNT - 12} More
                </div>
              </div>
            </div>
          </motion.div>
        </aside>

        {/* Right Column: Content Tabs */}
        <section className="flex-1 min-w-0">
          <div className="flex border-b border-[#30363d] mb-6 overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Overview', icon: Grid },
              { id: 'achievements', label: 'Achievements', icon: Trophy, count: ACHIEVEMENT_COUNT },
              { id: 'repositories', label: 'Repositories', icon: Github, count: 752 },
              { id: 'activity', label: 'Activity', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm transition-all relative whitespace-nowrap ${
                  activeTab === tab.id ? 'text-white border-b-2 border-[#f78166]' : 'text-[#8b949e] hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count && (
                  <span className="bg-[#30363d] text-white px-2 py-0.5 rounded-full text-[10px]">
                    {tab.count.toLocaleString()}
                  </span>
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-medium">Popular Repositories</h3>
                    <span className="text-sm text-[#58a6ff] hover:underline cursor-pointer">Customize your pins</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'undecillion-engine', desc: 'Infinite scale social engine with quantum networking.', lang: 'Rust', stars: '752U', forks: '42U' },
                      { name: 'mapalad-ui', desc: 'A design system forged in the depths of minimalism.', lang: 'TypeScript', stars: '142M', forks: '12M' },
                      { name: 'world-crafter', desc: 'Procedural universe generation library.', lang: 'C++', stars: '98K', forks: '5K' },
                      { name: 'zen-os', desc: 'Microkernel-based OS with zero latency.', lang: 'Assembly', stars: '452K', forks: '89K' }
                    ].map((repo) => (
                      <div key={repo.name} className="p-4 border border-[#30363d] bg-[#0d1117] rounded-md hover:border-[#8b949e] transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-[#58a6ff] font-bold cursor-pointer hover:underline">{repo.name}</span>
                          <span className="text-xs border border-[#30363d] px-2 py-0.5 rounded-full text-[#8b949e]">Public</span>
                        </div>
                        <p className="text-xs text-[#8b949e] mt-2 leading-relaxed">{repo.desc}</p>
                        <div className="mt-4 flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-3 h-3 rounded-full ${repo.lang === 'Rust' ? 'bg-[#dea584]' : repo.lang === 'TypeScript' ? 'bg-[#3178c6]' : repo.lang === 'C++' ? 'bg-[#f34b7d]' : 'bg-[#b07219]'}`} />
                            <span>{repo.lang}</span>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer hover:text-[#58a6ff]">
                            <Star className="w-3 h-3" /> <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center gap-1 cursor-pointer hover:text-[#58a6ff]">
                            <Activity className="w-3 h-3" /> <span>{repo.forks}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-4">Contribution Heatmap</h3>
                  <div className="p-4 border border-[#30363d] rounded-md overflow-x-auto bg-[#161b22]">
                    <div className="flex gap-1 min-w-[800px]">
                      {Array.from({ length: 52 }).map((_, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                          {Array.from({ length: 7 }).map((_, dayIndex) => {
                            const intensity = Math.random();
                            return (
                              <div 
                                key={dayIndex}
                                className={`w-3 h-3 rounded-sm transition-colors hover:ring-1 hover:ring-white ${
                                  intensity > 0.8 ? 'bg-[#39d353]' : 
                                  intensity > 0.5 ? 'bg-[#26a641]' : 
                                  intensity > 0.2 ? 'bg-[#006d21]' : 'bg-[#161b22] border border-white/5'
                                }`}
                                title={`${Math.floor(intensity * 100)} contributions`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-[#8b949e]">
                      <span>Learn how we count contributions</span>
                      <div className="flex items-center gap-1">
                        <span>Less</span>
                        <div className="w-3 h-3 rounded-sm bg-[#161b22] border border-white/5" />
                        <div className="w-3 h-3 rounded-sm bg-[#006d21]" />
                        <div className="w-3 h-3 rounded-sm bg-[#26a641]" />
                        <div className="w-3 h-3 rounded-sm bg-[#39d353]" />
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {displayBadges.map((badge) => (
                    <motion.div 
                      key={badge.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: badge.id * 0.01 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex flex-col items-center gap-2 p-4 border border-[#30363d] rounded-lg bg-[#161b22] hover:border-[#58a6ff] transition-all cursor-pointer group"
                    >
                      <div className={`p-3 rounded-full ${badge.color} bg-opacity-20 border border-white/10 shadow-lg group-hover:shadow-[#58a6ff]/20`}>
                        <badge.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-[10px] font-bold text-[#8b949e] uppercase tracking-wider text-center">
                        Achievement #{badge.id + 1}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-[#30363d] rounded-lg">
                  <div className="mb-4 bg-[#21262d] p-4 rounded-full">
                    <Trophy className="w-8 h-8 text-amber-500" />
                  </div>
                  <h4 className="text-white font-semibold">{ACHIEVEMENT_COUNT - displayBadges.length} More Achievements Locked</h4>
                  <p className="text-[#8b949e] text-sm text-center mt-1">Keep contributing to unlock them all. Experience points: 7.52 Undecillion</p>
                  <button className="mt-6 bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md font-semibold text-sm transition-colors">
                    Explore Adventure Log
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'repositories' && (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <div className="w-24 h-24 bg-[#161b22] rounded-full flex items-center justify-center mb-6 border-2 border-[#30363d]">
                   <Github className="w-12 h-12 text-[#8b949e]" />
                </div>
                <h3 className="text-xl text-white font-medium mb-2">Showing 752 Public Repositories</h3>
                <p className="text-[#8b949e] max-w-md mx-auto">All repositories are hosted on the decentralized Mapalad network. Loading full list might cause a temporary localized gravitational shift due to data density.</p>
                <div className="mt-8 flex gap-4">
                  <button className="bg-[#238636] text-white px-4 py-2 rounded-md font-semibold text-sm">View Source</button>
                  <button className="bg-[#21262d] text-white px-4 py-2 rounded-md font-semibold text-sm border border-[#30363d]">Clone All (7PB)</button>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="relative pl-8 before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-[2px] before:bg-[#30363d]">
                {[
                  { date: 'Today', events: [
                    { type: 'commit', repo: 'undecillion-engine', text: 'Merged PR #7,524,129: Quantum latency optimization' },
                    { type: 'star', repo: 'mapalad-ui', text: 'Reached 142M stars benchmark' }
                  ]},
                  { date: 'Yesterday', events: [
                    { type: 'create', repo: 'nebula-scraper', text: 'Created new private repository' },
                    { type: 'badge', repo: 'Global', text: 'Unlocked "Interstellar Developer" Achievement' }
                  ]},
                  { date: 'May 15', events: [
                    { type: 'fork', repo: 'linux-kernel', text: 'Forked linux-kernel to kjmapalad/linux-zen' }
                  ]}
                ].map((group, i) => (
                  <div key={i} className="mb-8 relative">
                    <div className="absolute -left-8 top-1.5 w-6 h-6 border-4 border-[#0d1117] bg-[#30363d] rounded-full z-10" />
                    <h4 className="text-sm text-[#8b949e] mb-4">{group.date}</h4>
                    <div className="space-y-4">
                      {group.events.map((event, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`mt-1 p-1 rounded-sm ${event.type === 'commit' ? 'bg-green-500/20' : event.type === 'star' ? 'bg-amber-500/20' : 'bg-blue-500/20'}`}>
                            {event.type === 'commit' ? <Activity className="w-3 h-3 text-green-500" /> : <Star className="w-3 h-3 text-amber-500" />}
                          </div>
                          <div className="text-sm">
                            <span className="text-[#8b949e]">In</span> <span className="text-[#58a6ff] hover:underline cursor-pointer font-medium">{event.repo}</span>
                            <p className="text-white mt-1">{event.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-[#30363d] mt-12 text-[#8b949e] text-xs">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
            <Github className="w-6 h-6 opacity-40" />
            <span>© 2026 Mapalad Social. Distributed across 752 Undecillion nodes.</span>
           </div>
           <div className="flex flex-wrap justify-center gap-4">
            <span className="hover:text-[#58a6ff] cursor-pointer">Terms</span>
            <span className="hover:text-[#58a6ff] cursor-pointer">Privacy</span>
            <span className="hover:text-[#58a6ff] cursor-pointer">Security</span>
            <span className="hover:text-[#58a6ff] cursor-pointer">Status</span>
            <span className="hover:text-[#58a6ff] cursor-pointer">Contact</span>
           </div>
        </div>
      </footer>
    </div>
  );
}

