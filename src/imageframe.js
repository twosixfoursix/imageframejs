function fault(c, from = '') {
  if(from !== '') {
    throw new Error(`FAULT <${from}>: ${c}`)
  }
  else {
    throw new Error(`FAULT: ${c}`)
  }
}

export class ImageFrame {
  static previcon = `url('data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2048%2048%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%22%3E%3Cpath%20d%3D%22M13.756%2C24.619c-0.164%2C-0.165%20-0.256%2C-0.386%20-0.256%2C-0.619c0%2C-0.233%200.092%2C-0.454%200.256%2C-0.619l7.95%2C-7.95c0.342%2C-0.341%200.896%2C-0.341%201.238%2C0c0.341%2C0.342%200.341%2C0.896%20-0%2C1.238l-6.286%2C6.285c-0.028%2C0.029%20-0.037%2C0.072%20-0.022%2C0.109c0.016%2C0.038%200.052%2C0.062%200.093%2C0.062l16.896%2C-0c0.483%2C-0%200.875%2C0.392%200.875%2C0.875c0%2C0.483%20-0.392%2C0.875%20-0.875%2C0.875l-16.896%2C-0c-0.041%2C-0%20-0.077%2C0.024%20-0.093%2C0.062c-0.015%2C0.037%20-0.006%2C0.08%200.022%2C0.109l6.286%2C6.285c0.341%2C0.342%200.341%2C0.896%20-0%2C1.238c-0.342%2C0.341%20-0.896%2C0.341%20-1.238%2C-0l-7.95%2C-7.95Z%22%2F%3E%3C%2Fsvg%3E')`;
  static ffwdicon = `url('data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2048%2048%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%22%3E%3Cpath%20d%3D%22M34.244%2C24.619l-7.95%2C7.95c-0.342%2C0.341%20-0.896%2C0.341%20-1.238%2C0c-0.341%2C-0.342%20-0.341%2C-0.896%200%2C-1.238l6.286%2C-6.285c0.028%2C-0.029%200.037%2C-0.072%200.022%2C-0.109c-0.016%2C-0.038%20-0.052%2C-0.062%20-0.093%2C-0.062l-16.896%2C-0c-0.483%2C-0%20-0.875%2C-0.392%20-0.875%2C-0.875c0%2C-0.483%200.392%2C-0.875%200.875%2C-0.875l16.896%2C-0c0.041%2C-0%200.077%2C-0.024%200.093%2C-0.062c0.015%2C-0.037%200.006%2C-0.08%20-0.022%2C-0.109l-6.286%2C-6.285c-0.341%2C-0.342%20-0.341%2C-0.896%200%2C-1.238c0.342%2C-0.341%200.896%2C-0.341%201.238%2C-0l7.95%2C7.95c0.164%2C0.165%200.256%2C0.386%200.256%2C0.619c0%2C0.233%20-0.092%2C0.454%20-0.256%2C0.619Z%22%2F%3E%3C%2Fsvg%3E')`;
  static indicationpointicon = `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2C2c5.519%2C0%2010%2C4.481%2010%2C10c0%2C5.519%20-4.481%2C10%20-10%2C10c-5.519%2C0%20-10%2C-4.481%20-10%2C-10c0%2C-5.519%204.481%2C-10%2010%2C-10Zm0%2C4c-3.311%2C0%20-6%2C2.689%20-6%2C6c0%2C3.311%202.689%2C6%206%2C6c3.311%2C0%206%2C-2.689%206%2C-6c0%2C-3.311%20-2.689%2C-6%20-6%2C-6Z%22%2F%3E%3C%2Fsvg%3E')`;
  static indicationpointactiveicon = `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2C2c5.519%2C0%2010%2C4.481%2010%2C10c0%2C5.519%20-4.481%2C10%20-10%2C10c-5.519%2C0%20-10%2C-4.481%20-10%2C-10c0%2C-5.519%204.481%2C-10%2010%2C-10Z%22%2F%3E%3C%2Fsvg%3E')`;

  constructor(imageframeview) {
    if(imageframeview !== null) {
      this.imageframeview = imageframeview;
      this.at = 0;
      this.active = true; // Prevent interaction prior to ini.
      this.timingfunc = null; // Holds identification of the current timing function.
      this.auto = 0;
      this.imageframe = document.createElement('div');
      this.imageframe.classList.add('imageframe');
      this.arrowprev = document.createElement('span');
      this.arrowprev.classList.add('imageframe-arrow');
      this.arrowprev.setAttribute('direction', '<');
      this.arrowprev.style.left = 0;
      this.arrowprev.style.backgroundImage = ImageFrame.previcon;
      this.arrowffwd = document.createElement('span');
      this.arrowffwd.classList.add('imageframe-arrow');
      this.arrowffwd.setAttribute('direction', '>');
      this.arrowffwd.style.backgroundImage = ImageFrame.ffwdicon;
      this.arrowffwd.style.right = 0;
      const arrowfunc = (action) => {
        if(this.active) { // Gated.
          return;
        }
        clearInterval(this.timingfunc); // Remove current timing function.
        if(action.target.getAttribute('direction') === '>') {
          this.indicationarray[this.at++].style.backgroundImage = ImageFrame.indicationpointicon; // Remove active indication for prev image [MUST do this here to avoid desync issues - this doesn't have any transition animations anyway].
          if(this.at > this.imageamount) {
            this.at = 0;
          }
          requestAnimationFrame(() => {
            this.presentImage();
          });
        }
        else {
          this.indicationarray[this.at--].style.backgroundImage = ImageFrame.indicationpointicon; // Remove active indication for prev image [MUST do this here to avoid desync issues - this doesn't have any transition animations anyway].
          if(this.at < 0) {
            this.at = this.imageamount;
          }
          requestAnimationFrame(() => {
            this.presentImage(1);
          });
        }
        if(this.auto > 0) { // Add new timing function if animation pref is active.
          this.animate();
        }
      };
      this.arrowprev.addEventListener('click', arrowfunc);
      this.arrowffwd.addEventListener('click', arrowfunc);
      this.funcarray = [];
      this.funcarray.push(arrowfunc);
      this.imageframe.append(this.arrowprev);
      this.imageframe.append(this.arrowffwd);
      this.indication = document.createElement('span');
      this.indication.classList.add('imageframe-indication');
      this.imageframe.append(this.indication);
      const image0 = document.createElement('span');
      image0.classList.add('imageframe-image');
      image0.style.backgroundImage = `url('https://app.a1/app/img/a1data.png')`;
      image0.style.opacity = 1;
      this.imageview = image0; // Add default image item.
      this.imageframe.append(image0);
      this.imageframeview.append(this.imageframe); // Activate image frame.
    }
    else {
      fault('Could not find ImageFrame view', 'ImageFrame');
    }
  }

  ini(imagelist, auto = 0) {
    if(imagelist.length > 0) {
      this.imagearray = imagelist.slice(0); // Register to image array.
      this.imageamount = this.imagearray.length; // Iteration limit, not actual length (-1).
      this.indicationarray = [];
      this.imageitemarray = new Array(imagelist.length); // Fixed size array used to hold image objects which in turn are used to encourage 'pre loading' of images.
      for(let u = 0; u < this.imageamount; ++u) {
        this.imageitemarray[u] = new Image();
        this.imageitemarray[u].src = this.imagearray[u];
        const indicationpoint = document.createElement('span');
        indicationpoint.classList.add('imageframe-indication-point');
        indicationpoint.style.backgroundImage = ImageFrame.indicationpointicon;
        this.indication.append(indicationpoint);
        this.indicationarray.push(indicationpoint);
      }
      --this.imageamount; // -1.
      this.active = false;
      this.presentImage();
      if((auto >= 1000) && (auto <= 10000)) {
        this.auto = auto;
        this.animate();
      }
      else {
        console.log('WARNING <ImageFrame | ini>: Animation period is too large (must be within 1000ms to 10000ms) - animation NOT activated');
      }
      return this.imageframe;
    }
    else {
      fault('Image list must contain at least 1 image path', 'ImageFrame | ini');
      return null;
    }
  }

  animate() {
    this.timingfunc = setInterval(() => {
      if(this.active) {
        return;
      }
      this.indicationarray[this.at++].style.backgroundImage = ImageFrame.indicationpointicon; // Remove active indication for prev image [MUST do this here to avoid desync issues - this doesn't have any transition animations anyway].
      if(this.at > this.imageamount) {
        this.at = 0;
      }
      requestAnimationFrame(() => {
        this.presentImage();
      });
    }, this.auto - 200);
  }

  presentImage(prevdirection = 0) {
    if(this.active) {
      return;
    }
    this.active = true;

    const n = this.at; // Fetch current image num on image array.

    const previmage = this.imageview;
    previmage.style.opacity = '0'; // Remove prev image.
    this.indicationarray[n].style.backgroundImage = ImageFrame.indicationpointactiveicon;

    if((typeof this.imagearray[n]) === 'string') {
      const imagepath = this.imagearray[n];
      this.imagearray[n] = document.createElement('span');
      this.imagearray[n].classList.add('imageframe-image');
      this.imagearray[n].addEventListener('transitionend', (action) => {
        previmage.style.willChange = 'auto'; // GPU promotion OFF for prev image.
        this.active = false;
      });
      this.imagearray[n].style.backgroundImage = `url(${this.imageitemarray[n].src})`;
      this.imageitemarray[n].src = ''; // Remove associated image from image object.
      this.imageitemarray[n] = null; // Indicate full reclamability of image object.
    }

    this.imagearray[n].style.opacity = '0';
    this.imagearray[n].style.willChange = 'opacity'; // GPU promotion ON for new (to view) image.
    this.imageframe.replaceChild(this.imagearray[n], this.imageview); // Add new image.

    this.imageview = this.imagearray[n]; // Replace current image inst.

    requestAnimationFrame(() => {
      this.imagearray[n].style.opacity = '1'; // Fade in new (to view) image.
    });
  }
}
