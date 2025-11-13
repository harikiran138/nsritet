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
};

// Helper function to get full image paths
export const getImagePaths = (folder: keyof typeof storyImages) => {
  const folderMap = {
    fdp: 'fdp',
    hackathon: 'hackathon',
    engineersDay: 'engineers-day',
    cultural: 'cultural',
  };
  
  return storyImages[folder].map(
    (filename) => `/images/stories/${folderMap[folder]}/${filename}`
  );
};
# Image paths verified and committed
