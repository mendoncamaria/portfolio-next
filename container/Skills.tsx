"use client";

import { GiSkills } from 'react-icons/gi';
import Title from '../components/Title';
import SkillsInput from '../components/SkillsInput';
import { skillCategories, topSkills } from '@/data/SkillsCategoryData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { SectionTitles, SkillsTexts } from '@/data/TextConstants';

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="wrapper space-y-8">
      <Title text={SectionTitles.SKILLS} icon={<GiSkills />} />
      
      {!showAll ? (
        /* Top Skills View */
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            {SkillsTexts.HEADER}
          </h3>
          <div className="flex gap-3 flex-wrap">
            {topSkills.map((skill, idx) => (
              <SkillsInput key={idx+skill.title} title={skill.title} link={skill.link} />
            ))}
          </div>
        </div>
      ) : (
        /* Full Categorized View */
        <div className="space-y-6">
          {skillCategories.map((group, idx) => (
            <div key={idx+group.category} className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                {group.category}
              </h3>
              <div className="flex gap-3 flex-wrap">
                {group.skills.map((skill, skillIdx) => (
                  <SkillsInput
                    key={skillIdx+skill.title}
                    title={skill.title}
                    link={skill.link}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <div className="pt-2">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-slate-900 border border-slate-800 text-indigo-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all shadow-sm"
        >
          <span>{showAll ? SkillsTexts.SHOW_LESS : SkillsTexts.SEE_MORE}</span>
          {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
