// Configuration file for story images
// Add your image filenames here for each story

export const storyImages = {
  fdp: [
    '1762843017460.gif',
    'Faculty.jpeg',
    'IMG_1393.jpg',
    'IMG_1394.jpg',
    'IMG_1395.jpg',
    'IMG_1396.jpg',
    'IMG_1397.jpg',
    'IMG_1400.jpg',
    // Add more FDP image filenames here
  ],
  hackathon: [
    'Training.jpeg',
    'SIH-2025.png',
    'IMG_0993.jpg',
    'IMG_0995.jpg',
    'IMG_0996.jpg',
    'IMG_0998.jpg',
    'IMG_0999.jpg',
    'IMG_1001.jpg',
    'IMG_1002.jpg',
    'IMG_1005.jpg',
    'IMG_1006.jpg',
    'IMG_1007.jpg',
    'IMG_1008.jpg',
    'IMG_1009.jpg',
    'IMG_1010.jpg',
    'IMG_1011.jpg',
    'IMG_1012.jpg',
    // Add more Hackathon image filenames here
  ],
  engineersDay: [
    '1757935764672.jpeg',
    'sihimage.jpeg',
    'IMG_1289.jpg',
    'IMG_1290.jpg',
    'IMG_1291.jpg',
    'IMG_1292.jpg',
    'IMG_1293.jpg',
    'IMG_1294.jpg',
    'IMG_1295.jpg',
    'IMG_1296.jpg',
    'IMG_1297.jpg',
    'IMG_1298.jpg',
    'IMG_1299.jpg',
    'IMG_1300.jpg',
    'IMG_1301.jpg',
    'IMG_1302.jpg',
    'IMG_1303.jpg',
    'IMG_1304.jpg',
    // Add more Engineer's Day image filenames here
  ],
  cultural: [
    'cultural-1.jpg',
    'cultural-2.jpg',
    'cultural-3.jpg',
    'cultural-4.jpg',
    // Add Cultural Values and Divinity image filenames here
  ],
  induction: [
    'PHOTO-2025-11-13-18-16-50.jpg',
    'whatsapp-image-2025-11-13-18-16-44-1.jpeg',
    'whatsapp-image-2025-11-13-18-16-44-2.jpeg',
    'whatsapp-image-2025-11-13-18-16-44.jpeg',
    'whatsapp-image-2025-11-13-18-16-45-1.jpeg',
    'whatsapp-image-2025-11-13-18-16-45.jpeg',
    'whatsapp-image-2025-11-13-18-16-46-1.jpeg',
    'whatsapp-image-2025-11-13-18-16-46.jpeg',
    'whatsapp-image-2025-11-13-18-16-47.jpeg',
    'whatsapp-image-2025-11-13-18-16-48.jpeg',
    'whatsapp-image-2025-11-13-18-16-49-1.jpeg',
    'whatsapp-image-2025-11-13-18-16-49.jpeg',
    'whatsapp-image-2025-11-13-18-16-50.jpeg',
    'whatsapp-image-2025-11-13-18-16-51.jpeg',
    'whatsapp-image-2025-11-13-18-16-52-1.jpeg',
    'whatsapp-image-2025-11-13-18-16-52.jpeg',
    'whatsapp-image-2025-11-13-18-16-53.jpeg',
    'whatsapp-image-2025-11-13-18-16-54.jpeg',
    'whatsapp-image-2025-11-13-18-16-55.jpeg',
    'whatsapp-image-2025-11-13-18-47-53.jpeg',
  ],
};

// Helper function to get full image paths
export const getImagePaths = (folder: keyof typeof storyImages) => {
  const folderMap = {
    fdp: 'fdp',
    hackathon: 'hackathon',
    engineersDay: 'engineers-day',
    cultural: 'cultural',
    induction: 'induction',
  };
  
  return storyImages[folder].map(
    (filename) => `/images/stories/${folderMap[folder]}/${filename}`
  );
};
