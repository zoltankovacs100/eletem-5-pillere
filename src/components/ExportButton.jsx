import React from 'react';
import { toPng } from 'html-to-image';

const ExportButton = ({ exportRef }) => {
  const handleExport = async () => {
    if (!exportRef.current) return;

    try {
      const dataUrl = await toPng(exportRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: null // or set manually
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
    <div className="text-center">
      <button
        onClick={handleExport}
        className="text-white border border-white hover:border-green-600 font-bold py-2 px-4 rounded transition-colors duration-350 mt-15"
      >
        Export as PNG
      </button>
    </div>
  );
};

export default ExportButton;
