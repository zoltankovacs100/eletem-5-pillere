import React, { useState } from 'react';

// Force update: 2025-01-09 - Widen pillar container: w-6 → w-8

const Scale = ({ scaleName }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [desiredValue, setDesiredValue] = useState(0);
  
  const MIN = 0;
  const MAX = 100;

  const accentColor = '#01918C';
  const lightAccentColor = '#02c7c0';
  return (
    <div className="w-[250px] flex-shrink-0 flex flex-col items-center gap-4 bg-white p-4 rounded-md shadow-lg">
      
      {/* Pillar visualization with green border/container */}
      <div 
        className="rounded-lg"
        style={{
          backgroundColor: '#cccccc',
          padding: '15px'
        }}
      >
        <div className="relative w-8 h-64 rounded-sm overflow-hidden bg-gray-200">
          {/* "Current" value bar - light green */}
          <div
            className="absolute left-0 w-full"
            style={{
              bottom: '0%',
              height: `${currentValue}%`,
              backgroundColor: lightAccentColor,
            }}
          />
          {/* "Desired" value bar - dark green, above current */}
          <div
            className="absolute left-0 w-full"
            style={{
              bottom: `${currentValue}%`,
              height: `${Math.max(0, desiredValue - currentValue)}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-2 items-center text-gray-800 bg-gray-50 border rounded-lg px-3 py-2 w-full">
        
        {/* Jelenlegi - Light Green */}
        <div className="flex items-center gap-1 w-full">
          <label className="text-xs font-bold" style={{ color: lightAccentColor, minWidth: '50px' }}>
            Jelenlegi
          </label>
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={currentValue}
            onChange={(e) => setCurrentValue(Number(e.target.value))}
            className="flex-1"
            style={{
              accentColor: lightAccentColor,
              height: '16px',
            }}
          />
          <span className="w-8 text-center text-sm font-bold" style={{ color: lightAccentColor }}>
            {currentValue}
          </span>
        </div>

        {/* Vágyott - Dark Green */}
        <div className="flex items-center gap-1 w-full">
          <label className="text-xs font-bold" style={{ color: accentColor, minWidth: '50px' }}>
            Vágyott
          </label>
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={desiredValue}
            onChange={(e) => setDesiredValue(Number(e.target.value))}
            className="flex-1"
            style={{
              accentColor: accentColor,
              height: '16px',
            }}
          />
          <span className="w-8 text-center text-sm font-bold" style={{ color: accentColor }}>
            {desiredValue}
          </span>
        </div>
      </div>

      <h2 className="text-center text-base font-bold pt-2" style={{ color: '#212529' }}>
        {scaleName}
      </h2>
    </div>
  );
};

export default Scale;
