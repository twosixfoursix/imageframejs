import {ImageFrame} from './imageframe.js'

window.addEventListener('load', () => {
  const imageframeView = document.getElementById('imageframe-view');
  if(imageframeView === null) {
    throw new Error('No ImageFrame container found');
  }

  const imageframe = new ImageFrame(imageframeView);

  const imagelist = [
    './image/img01.png',
    './image/img02.png',
    './image/img03.png',
    './image/img04.png',
    './image/img05.png',
  ];

  imageframe.ini(imagelist, 3200); // 2nd arg = 0 to disable slideshow feature.
}, { once: true });
