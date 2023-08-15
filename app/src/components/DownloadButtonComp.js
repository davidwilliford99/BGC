import React from 'react';
import axios from 'axios';


const DownloadButton = ({ fileLinks }) => {


  const handleDownload = async () => {
    for (const link of fileLinks) {
      try {
        const response = await axios.get(link, { responseType: 'blob' });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement('a');
        a.href = url;
        a.download = link.substring(link.lastIndexOf('/') + 1); // Extract filename from the link
        document.body.appendChild(a);
        a.click();
        a.remove();
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    }
  };


  return (
    <button onClick={handleDownload} className='px-3 py-1 bg-neutral-500 mr-10 text-white font-semibold rounded-xl transition mt-10'>Download Files</button>
  );
};

export default DownloadButton;
