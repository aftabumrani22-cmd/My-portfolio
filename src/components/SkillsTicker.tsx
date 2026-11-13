import React from 'react';
import { skillCategories } from '../data/skills';

const skills = [...new Set(skillCategories.flatMap((group) => group.skills.map((skill) => skill.name)))];

export const SkillsTicker: React.FC = () => (
  <section className="overflow-hidden border-y border-slate-800 bg-[#0f172a] py-4" aria-label="A selection of technical skills">
    <div className="skills-marquee">
      {[0, 1].map((copy) => (
        <ul className="skills-marquee__track" key={copy} aria-hidden={copy === 1}>
          {skills.map((skill) => (
            <li className="skills-marquee__item" key={skill}>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              {skill}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);
