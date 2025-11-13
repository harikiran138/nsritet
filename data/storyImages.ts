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
    // Add more Hackathon image filenames here
  ],
  engineersDay: [
    '1757935764672.jpeg',
    'sihimage.jpeg',
    // Add more Engineer's Day image filenames here
  ],
  cultural: [
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
