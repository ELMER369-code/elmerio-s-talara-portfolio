import React from 'react';
import { ComplexityLevel } from '../types';
import { useTheme } from '../../context/ThemeContext';

interface ComplexityMeterProps {
  level: ComplexityLevel;
  score: number;
}

const ComplexityMeter: React.FC<ComplexityMeterProps> = ({ level, score }) => {
  const { vibe } = useTheme();
  const accentColor = vibe === 'cyan' ? 'cyan-electric' : 'green-hacker';
  const glowColor = vibe === 'cyan' ? 'rgba(0, 242, 255, 0.5)' : 'rgba(0, 255, 65, 0.5)';

  return (
    <div className="w-full mt-4 group">
      <div className="flex justify-between items-end mb-1">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate">Complexity</span>
        <span className={`font-mono text-[10px] uppercase text-${accentColor}`}>{level}</span>
      </div>

      <div className="h-1.5 w-full bg-navy-light rounded-sm overflow-hidden border border-navy-lighter relative">
        {/* Background Grid Lines for 'Ruler' effect */}
        <div className="absolute inset-0 flex justify-between px-1 z-10 pointer-events-none opacity-30">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-navy" />
          ))}
        </div>

        {/* The Fill Bar */}
        <div
          className={`h-full bg-${accentColor} transition-all duration-1000 ease-out`}
          style={{ width: `${score}%`, boxShadow: `0 0 10px ${glowColor}` }}
        />
      </div>
    </div>
  );
};

export default ComplexityMeter;