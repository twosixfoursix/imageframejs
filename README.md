# ImageFrame

Run of the mill simple JS image slider.

_A simple single-file JavaScript image sliding gallery container without any dependencies_.
![ImageFrame](https://github.com/twosixfoursix/imageframejs/blob/main/imageframe.gif)

### Usage

> [!WARNING]
> You might needs secure HTTPS context/CORS functionality to load images.

1. Simply include the file at a path __relative to__ site/project root.
2. Ensure image files are located at path __relative to__ site/project root.
3. On the JS side, identify & fetch the ImageFrame view holder.
4. Instantiate ImageFrame object via connecting it with the view holder.
5. Call the initialization method `ini(imagelist, transitionDelay)` where:
  * `imagelist`: A list of strings representing the relative path to image files.
  * `transitionDelay`: Time specifying how long each image should be shown before switching. __Note that the timing might not be accurate as this is completely under the discretion of the browser & it WILL throttle or not adhere whenever it deems appropriate__.
* HTML (`app.htm`)
```
<!DOCTYPE html>
<html lang="en">
<head>
<title>ImageFrame</title>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="./imageframe.css"/>
</head>
<body>
<main>
  <div id="imageframe-view"></div>
</main>
<script type="module" src="app.js"></script>
<script type="module" src="imageframe.js"></script>
</body>
</html>
```
* JS (`app.js`)
```
import { ImageFrame } from './imageframe.js'

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
```
