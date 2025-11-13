// Configuration file for story images
// Add your image filenames here for each story

export const storyImages = {
  fdp: [
    '1762843017460.gif',
    'Faculty.jpeg',

    // Add more FDP image filenames here
  ],
  hackathon: [
    'sihimage.jpeg',
    // Add more Hackathon image filenames here
  ],
  engineersDay: [
    '1757935764672.jpeg',
    // Add more Engineer's Day image filenames here
  ],
};

// Helper function to get full image paths
export const getImagePaths = (folder: keyof typeof storyImages) => {
  const folderMap = {
    fdp: 'fdp',
    hackathon: 'hackathon',
    engineersDay: 'engineers-day',
  };
  
  return storyImages[folder].map(
    (filename) => `/images/stories/${folderMap[folder]}/${filename}`
  );
};
