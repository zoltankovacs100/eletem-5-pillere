import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const Scale = ({ scaleName }) => {
  const [values, setValues] = useState([35, 65]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;

  const accentColor = '#01918C';
  const lightAccentColor = '#02c7c0';
  const trackBackgroundColor = '#ccc';

  return (
    <div className="w-[250px] flex-shrink-0 flex flex-col items-center gap-4 bg-white p-4 rounded-md shadow-lg">
      
      {/* Pillar visualization with green border/container */}
      <div 
        className="rounded-lg"
        style={{
          backgroundColor: accentColor,
          padding: '15px'
        }}
      >
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

        <div className="w-40 pt-2 flex justify-center">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={setValues}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '36px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '5px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values,
                      colors: [lightAccentColor, accentColor, trackBackgroundColor],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: 'center',
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => {
              return (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '16px',
                    width: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#FFF',
                    border: `2px solid ${accentColor}`,
                    boxShadow: '0px 2px 6px #AAA',
                  }}
                />
              );
            }}
          />
        </div>
      </div>

      <h2 className="text-center text-base font-bold pt-2" style={{ color: '#212529' }}>
        {scaleName}
      </h2>
    </div>
  );
};

export default Scale;
