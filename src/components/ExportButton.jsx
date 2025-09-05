import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ExportButton = ({ exportRef }) => {
  const handleExport = async () => {
    if (!exportRef.current) return;

    try {
      // A4 landscape méret mm-ben (297 x 210)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Canvas készítése html2canvas-szal
      const canvas = await html2canvas(exportRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        width: exportRef.current.scrollWidth,
        height: exportRef.current.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      
      // A4 landscape méret: 297mm x 210mm
      const pdfWidth = 297;
      const pdfHeight = 210;
      
      // Kép méretezése hogy fit to page legyen, aspect ratio megtartásával
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;
      
      // Középre igazítás
      const xOffset = (pdfWidth - finalWidth) / 2;
      const yOffset = (pdfHeight - finalHeight) / 2;

      pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
      pdf.save('eletem-5-pillere.pdf');
    } catch (err) {
      console.error('PDF export failed:', err);
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
