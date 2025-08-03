import React from 'react';
import { toPng } from 'html-to-image';

const ExportButton = ({ exportRef }) => {
  const handleExport = async () => {
    if (!exportRef.current) return;

    try {
      const dataUrl = await toPng(exportRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: null // átlátszó háttér, manuálisan beállítható
      });

      const link = document.createElement('a');
      link.download = 'pillars-export.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    }
  };

  return (
    <div className="w-full text-center mt-6">
      <button
        onClick={handleExport}
        className="text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        style={{ backgroundColor: '#01918C' }}
      >
        Mentés
      </button>
    </div>
  );
};

export default ExportButton;
