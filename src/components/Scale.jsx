import React, { useState } from 'react';
import { Range } from 'react-range';

const Scale = ({ scaleName }) => {
  const [values, setValues] = useState([35, 65]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;

  return (
    <div className="w-[220px] flex-shrink-0 flex flex-col items-center gap-4 p-4 ">

      <div
        className="border p-10 rounded"
        style={{
          backgroundImage: `repeating-linear-gradient(
      to right,
      #2d2d2d 0px,
      #2d2d2d 2px,
      #1a1a1a 2px,
      #1a1a1a 6px
    )`
        }}
      >

        <div className="relative w-6 h-64 rounded overflow-hidden border">
          <div
            className="absolute left-0 w-full bg-green-600"
            style={{
              bottom: '0%',
              height: `${values[0]}%`,
            }}
          />
          <div
            className="absolute left-0 w-full bg-orange-500"
            style={{
              bottom: `${values[0]}%`,
              height: `${values[1] - values[0]}%`,
            }}
          />
        </div>
      </div>


      {/* Bemenetek + csúszka */}
      <div className="flex flex-col gap-4 items-center text-white border p-4"
      style={{
          backgroundImage: `repeating-linear-gradient(
      to right,
      #2d2d2d 0px,
      #2d2d2d 2px,
      #1a1a1a 2px,
      #1a1a1a 6px
    )`
        }}>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">Jelenlegi (%)</label>
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
              className="w-20 border rounded px-2 py-1 text-center bg-black text-white"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">Vágyott (%)</label>
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
              className="w-20 border rounded px-2 py-1 text-center bg-black text-white"
            />
          </div>
        </div>

        <div className="w-32">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={setValues}
            renderTrack={({ props, children }) => (
              <div {...props} className="h-2 bg-gray-300 rounded">
                {children}
              </div>
            )}
            renderThumb={({ props }) => {
              const { key, ...rest } = props;
              return (
                <div
                  key={key}
                  {...rest}
                  className="h-4 w-4 bg-blue-500 rounded-full shadow"
                />
              );
            }}
          />
        </div>
      </div>

      <h2 className="text-center text-lg font-semibold text-black">{scaleName}</h2>


    </div>
  );
};

export default Scale;
