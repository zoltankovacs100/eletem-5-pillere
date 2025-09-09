import React, { useState } from 'react';

// Force update: 2025-01-09 - Widen pillar container: w-6 → w-8
// Force update: 2025-01-09 - Compact layout: 180px width, h-56 height, improved controls

const Scale = ({ scaleName }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [desiredValue, setDesiredValue] = useState(0);
  
  const MIN = 0;
  const MAX = 100;

  const accentColor = '#01918C';
  const lightAccentColor = '#02c7c0';
  return (
    <div className="w-[180px] flex-shrink-0 flex flex-col items-center gap-3 bg-white p-3 rounded-md shadow-lg">
      
      {/* Pillar visualization with green border/container */}
      <div 
        className="rounded-lg"
        style={{
          backgroundColor: '#cccccc',
          padding: '10px'
        }}
      >
        <div className="relative w-6 h-56 rounded-sm overflow-hidden bg-gray-200">
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

      {/* Controls - Kompakt layout */}
      <div className="flex flex-col gap-3 items-center text-gray-800 bg-gray-50 border rounded-lg px-2 py-2 w-full">
        
        {/* Jelenlegi - Light Green */}
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold" style={{ color: lightAccentColor, fontSize: '12px', fontWeight: 'bold' }}>
              Jelenlegi
            </label>
            <span className="text-sm font-bold" style={{ color: lightAccentColor, fontSize: '14px', fontWeight: 'bold' }}>
              {currentValue}
            </span>
          </div>
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={currentValue}
            onChange={(e) => setCurrentValue(Number(e.target.value))}
            className="w-full"
            style={{
              accentColor: lightAccentColor,
              height: '12px',
            }}
          />
        </div>

        {/* Vágyott - Dark Green */}
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold" style={{ color: accentColor, fontSize: '12px', fontWeight: 'bold' }}>
              Vágyott
            </label>
            <span className="text-sm font-bold" style={{ color: accentColor, fontSize: '14px', fontWeight: 'bold' }}>
              {desiredValue}
            </span>
          </div>
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={desiredValue}
            onChange={(e) => setDesiredValue(Number(e.target.value))}
            className="w-full"
            style={{
              accentColor: accentColor,
              height: '12px',
            }}
          />
        </div>
      </div>

      <h2 className="text-center text-sm font-bold pt-1" style={{ color: '#212529', fontSize: '14px', fontWeight: 'bold' }}>
        {scaleName}
      </h2>
    </div>
  );
};

export default Scale;
