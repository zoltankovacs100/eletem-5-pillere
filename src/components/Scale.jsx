import React, { useState } from 'react';
import { Range } from 'react-range';

const Scale = ({ scaleName }) => {
  const [values, setValues] = useState([35, 65]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;

  // Accent color from palette 1
  const accentColor = '#01918C';
  // A lighter shade for the "current" value bar
  const lightAccentColor = '#02c7c0'; 

  return (
    <div className="w-[220px] flex-shrink-0 flex flex-col items-center gap-4">
      {/* Pillar visualization */}
      <div className="bg-gray-50 border rounded-lg p-4">
        <div className="relative w-6 h-64 rounded-sm overflow-hidden bg-gray-200">
          {/* "Current" value bar */}
          <div
            className="absolute left-0 w-full"
            style={{
              bottom: '0%',
              height: `${values[0]}%`,
              backgroundColor: lightAccentColor,
            }}
          />
          {/* "Desired" value bar */}
          <div
            className="absolute left-0 w-full"
            style={{
              bottom: `${values[0]}%`,
              height: `${values[1] - values[0]}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 items-center text-gray-800 bg-gray-50 border rounded-lg p-4 w-full">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <label className="text-xs mb-1 font-bold">Jelenlegi</label>
            <input
              type="number"
              min={MIN}
              max={values[1]}
              value={values[0]}
              onChange={(e) =>
                setValues([
                  Math.min(Number(e.target.value), values[1]),
                  values[1],
                ])
              }
              className="w-20 border-gray-300 border rounded px-2 py-1 text-center text-gray-800"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="text-xs mb-1 font-bold">Vágyott</label>
            <input
              type="number"
              min={values[0]}
              max={MAX}
              value={values[1]}
              onChange={(e) =>
                setValues([
                  values[0],
                  Math.max(Number(e.target.value), values[0]),
                ])
              }
              className="w-20 border-gray-300 border rounded px-2 py-1 text-center text-gray-800"
            />
          </div>
        </div>

        <div className="w-40 pt-2">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={setValues}
            renderTrack={({ props, children }) => (
              <div {...props} className="h-1 bg-gray-300 rounded-full">
                {children}
              </div>
            )}
            renderThumb={({ props, isDragged }) => {
              const { key, ...rest } = props;
              return (
                <div
                  key={key}
                  {...rest}
                  className="h-4 w-4 rounded-full shadow"
                  style={{ 
                    backgroundColor: accentColor,
                    outline: 'none',
                    border: '2px solid white'
                  }}
                />
              );
            }}
          />
        </div>
      </div>

      <h2 className="text-center text-base font-bold" style={{ color: '#212529' }}>
        {scaleName}
      </h2>
    </div>
  );
};

export default Scale;
