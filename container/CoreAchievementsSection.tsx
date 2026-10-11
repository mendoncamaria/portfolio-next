'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { achievementsData } from '@/data/AchievementData';
import Title from '@/components/Title';
import { GiSparkles } from 'react-icons/gi';
import { AchievementTexts, SectionTitles } from '@/data/TextConstants';

export default function CoreAchievementsSection() {
  // Start with empty string so it doesn't expand on load if preferred, or 'all' if default open
  const [activeTab, setActiveTab] = useState<string>('');

  // Toggle handler: clicking the active tab deselects it (minimizes section)
  const handleTabClick = (tabId: string) => {
    setActiveTab((prev) => (prev === tabId ? '' : tabId));
  };

  const filteredCategories =
    activeTab === 'all'
      ? achievementsData
      : achievementsData.filter((cat) => cat.id === activeTab);

  return (
    <section className="wrapper">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-3">
          <Title text={SectionTitles.ACHIEVEMENTS} icon={<GiSparkles />} />
          <p className="text-lg tracking-wide gap-6 font-bold">
           {AchievementTexts.HEADER}
          </p>
          <p className="text-slate-400">
           {AchievementTexts.DESCRIPTION}
          </p>
        </div>

        {/* Filter Tab Controls */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTabClick('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {AchievementTexts.ALL_AREAS}
          </button>
          {achievementsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat.icon}
              <span>{cat.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid (Renders only when a tab is selected) */}
        {activeTab !== '' && (
          <div className="space-y-10 transition-all duration-300">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-5">
                {/* Category Sub-Header */}
                <div className="flex items-center gap-3 border-l-2 border-indigo-500 pl-4">
                  {category.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.achievements.map((item, idx) => (
                    <div
                      key={item.title + idx}
                      className="group relative bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-base font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                            {item.title}
                          </h4>
                          {item.metric && (
                            <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
                              {item.metric}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-2 flex items-center text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mr-1.5" />
                        {AchievementTexts.PROD_IMP}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
