import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ExportButton = ({ exportRef }) => {
  const handleExport = async () => {
    if (!exportRef.current) return;

    try {
      console.log('Starting PDF export...');
      
      // Canvas készítése html2canvas-szal
      const canvas = await html2canvas(exportRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      console.log('Canvas created:', canvas.width, 'x', canvas.height);

      const imgData = canvas.toDataURL('image/png');
      
      // A4 landscape méret: 297mm x 210mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = 297;
      const pdfHeight = 210;
      
      // Kép méretezése hogy fit to page legyen
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Pixel to mm konverzió (96 DPI esetén)
      const pixelToMm = 0.264583;
      const imgWidthMm = imgWidth * pixelToMm;
      const imgHeightMm = imgHeight * pixelToMm;
      
      // Méretezési arány számítása
      const ratio = Math.min(pdfWidth / imgWidthMm, pdfHeight / imgHeightMm);
      
      const finalWidth = imgWidthMm * ratio;
      const finalHeight = imgHeightMm * ratio;
      
      // Középre igazítás
      const xOffset = (pdfWidth - finalWidth) / 2;
      const yOffset = (pdfHeight - finalHeight) / 2;

      pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
      pdf.save('eletem-5-pillere.pdf');
      
      console.log('PDF saved successfully!');
    } catch (err) {
      console.error('PDF export failed:', err);
      alert('Hiba a PDF mentés során: ' + err.message);
    }
  };

  return (
    <div className="w-full text-center mt-8">
      <button
        onClick={handleExport}
        className="text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        style={{ backgroundColor: '#01918C' }}
      >
        Mentés PDF-be
      </button>
    </div>
  );
};

export default ExportButton;
