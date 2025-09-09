import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

// Force update: 2025-01-09 - Improved PDF export with 20mm margins and fit-to-page

const ExportButton = ({ exportRef }) => {
  const handleExport = async () => {
    if (!exportRef.current) return;

    try {
      console.log('Starting PDF export...');
      
      // Canvas készítése html2canvas-szal - javított beállítások
      const canvas = await html2canvas(exportRef.current, {
        scale: 3, // Magasabb felbontás
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: true,
        logging: false,
        width: exportRef.current.scrollWidth,
        height: exportRef.current.scrollHeight,
        ignoreElements: (element) => {
          return element.classList && element.classList.contains('no-export');
        }
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
      
      // Nagyobb margók beállítása (20mm minden oldalon)
      const margin = 20;
      const availableWidth = pdfWidth - (2 * margin);
      const availableHeight = pdfHeight - (2 * margin);
      
      // Méretezési arány számítása - fit to page nagyobb margókkal
      const ratio = Math.min(availableWidth / imgWidthMm, availableHeight / imgHeightMm);
      
      const finalWidth = imgWidthMm * ratio;
      const finalHeight = imgHeightMm * ratio;
      
      // Középre igazítás a margókkal
      const xOffset = margin + (availableWidth - finalWidth) / 2;
      const yOffset = margin + (availableHeight - finalHeight) / 2;
      
      console.log('PDF dimensions with margins:', { 
        pdfWidth, 
        pdfHeight, 
        margin, 
        availableWidth, 
        availableHeight, 
        finalWidth, 
        finalHeight, 
        xOffset, 
        yOffset 
      });

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
