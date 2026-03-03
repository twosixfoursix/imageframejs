import { ImageFrame } from './imageframe.js'

window.addEventListener('load', () => {
  const imageframeView = document.getElementById('imageframe-view'); // Get container view.
  if(imageframeView === null) {
    throw new Error('No ImageFrame container found');
  }
  window.imageframe = new ImageFrame(imageframeView); // Initialize ImageFrame & connect to view.

  // List of image items to view.
  const imagelist = [
    './image/img01.png',
    './image/img02.png',
    './image/img03.png',
    './image/img04.png',
    './image/img05.png',
  ];

  // Load up...
  window.imageframe.ini(imagelist, 3200); // 2nd arg = 0 to disable slideshow feature.
  // window.imageframe.animateOn(); // Seems to not be necessary, but won't hurt in case of any 'complication'.
}, { once: true });

window.addEventListener('pageshow', () => {
  window.imageframe.animateOn();
});

window.addEventListener('pagehide', () => {
  window.imageframe.animateOff();
});
