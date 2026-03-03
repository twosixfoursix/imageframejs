export class ImageFrame {
  static previcon = `url('data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2048%2048%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%22%3E%3Cpath%20d%3D%22M13.756%2C24.619c-0.164%2C-0.165%20-0.256%2C-0.386%20-0.256%2C-0.619c0%2C-0.233%200.092%2C-0.454%200.256%2C-0.619l7.95%2C-7.95c0.342%2C-0.341%200.896%2C-0.341%201.238%2C0c0.341%2C0.342%200.341%2C0.896%20-0%2C1.238l-6.286%2C6.285c-0.028%2C0.029%20-0.037%2C0.072%20-0.022%2C0.109c0.016%2C0.038%200.052%2C0.062%200.093%2C0.062l16.896%2C-0c0.483%2C-0%200.875%2C0.392%200.875%2C0.875c0%2C0.483%20-0.392%2C0.875%20-0.875%2C0.875l-16.896%2C-0c-0.041%2C-0%20-0.077%2C0.024%20-0.093%2C0.062c-0.015%2C0.037%20-0.006%2C0.08%200.022%2C0.109l6.286%2C6.285c0.341%2C0.342%200.341%2C0.896%20-0%2C1.238c-0.342%2C0.341%20-0.896%2C0.341%20-1.238%2C-0l-7.95%2C-7.95Z%22%2F%3E%3C%2Fsvg%3E')`;
  static ffwdicon = `url('data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2048%2048%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%22%3E%3Cpath%20d%3D%22M34.244%2C24.619l-7.95%2C7.95c-0.342%2C0.341%20-0.896%2C0.341%20-1.238%2C0c-0.341%2C-0.342%20-0.341%2C-0.896%200%2C-1.238l6.286%2C-6.285c0.028%2C-0.029%200.037%2C-0.072%200.022%2C-0.109c-0.016%2C-0.038%20-0.052%2C-0.062%20-0.093%2C-0.062l-16.896%2C-0c-0.483%2C-0%20-0.875%2C-0.392%20-0.875%2C-0.875c0%2C-0.483%200.392%2C-0.875%200.875%2C-0.875l16.896%2C-0c0.041%2C-0%200.077%2C-0.024%200.093%2C-0.062c0.015%2C-0.037%200.006%2C-0.08%20-0.022%2C-0.109l-6.286%2C-6.285c-0.341%2C-0.342%20-0.341%2C-0.896%200%2C-1.238c0.342%2C-0.341%200.896%2C-0.341%201.238%2C-0l7.95%2C7.95c0.164%2C0.165%200.256%2C0.386%200.256%2C0.619c0%2C0.233%20-0.092%2C0.454%20-0.256%2C0.619Z%22%2F%3E%3C%2Fsvg%3E')`;
  static indicationpointicon = `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2C2c5.519%2C0%2010%2C4.481%2010%2C10c0%2C5.519%20-4.481%2C10%20-10%2C10c-5.519%2C0%20-10%2C-4.481%20-10%2C-10c0%2C-5.519%204.481%2C-10%2010%2C-10Zm0%2C4c-3.311%2C0%20-6%2C2.689%20-6%2C6c0%2C3.311%202.689%2C6%206%2C6c3.311%2C0%206%2C-2.689%206%2C-6c0%2C-3.311%20-2.689%2C-6%20-6%2C-6Z%22%2F%3E%3C%2Fsvg%3E')`;
  static indicationpointactiveicon = `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2C2c5.519%2C0%2010%2C4.481%2010%2C10c0%2C5.519%20-4.481%2C10%20-10%2C10c-5.519%2C0%20-10%2C-4.481%20-10%2C-10c0%2C-5.519%204.481%2C-10%2010%2C-10Z%22%2F%3E%3C%2Fsvg%3E')`;

  constructor(imageframeview) {
    this.timingfunc = null; // Holds identification of the current timing function.
    if(imageframeview !== null) {
      this.fresh(imageframeview);
    }
    else {
      throw new Error('<ImageFrame>: Could not find an ImageFrame view');
    }
  }

  /* -------------------------------------------------------------------------------------- //
      Roll up a new instance with provided imageframe container view.
  // -------------------------------------------------------------------------------------- */
  fresh(imageframeview) {
    clearInterval(this.timingfunc);
    this.imageframeview = imageframeview;
    this.at = 0;
    this.active = true; // Prevent interaction prior to ini.
    this.auto = 0; // Timing duration for each image (0 = no animating).
    this.arrowfunc; // This will hold the prev/next arrow function.
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
    this.arrowfunc = arrowfunc;
    this.imageframe.append(this.arrowprev);
    this.imageframe.append(this.arrowffwd);
    this.indication = document.createElement('span');
    this.indication.classList.add('imageframe-indication');
    this.imageframe.append(this.indication);
    this.image0 = document.createElement('span');
    this.image0.classList.add('imageframe-image');
    this.image0.style.background = 'rgb(32, 38, 48)';
    this.image0.style.opacity = 1;
    this.imageview = this.image0; // Add default image item.
    this.imageframe.append(this.image0);
    this.imageframeview.append(this.imageframe); // Activate image frame.
  }

  /* -------------------------------------------------------------------------------------- //
      Function to load the images on to the imageframe.
      -= imagelist: An array of strings specifying the image item RELATIVE to net root.
      -= auto: Transition time in MILLISECONDS. Anything below 1000ms means the auto
               transition feature is deactivated & anything above 10 seconds is made to
               work the same with a warning of being too high.
  // -------------------------------------------------------------------------------------- */
  ini(imagelist, auto = 0) {
    if(imagelist.length > 0) {
      this.imagearray = imagelist.slice(0); // Register to image array.
      this.imageamount = this.imagearray.length; // Iteration limit, not actual length (-1).
      this.indicationarray = [];
      this.imageitemarray = new Array(imagelist.length); // Fixed size array used to hold image objects which in turn are used to encourage 'pre loading' of images.
      this.imagefunctionarray = [];
      for(let u = 0; u < this.imageamount; ++u) {
        this.imageitemarray[u] = new Image();
        this.imageitemarray[u].src = this.imagearray[u];
        const indicationpoint = document.createElement('span');
        indicationpoint.classList.add('imageframe-indication-point');
        indicationpoint.style.backgroundImage = ImageFrame.indicationpointicon;
        this.indication.append(indicationpoint);
        this.indicationarray.push(indicationpoint);
        this.imagefunctionarray.push(null);
      }
      --this.imageamount; // -1.
      this.active = false;
      if((auto >= 1000) && (auto <= 10000)) {
        this.auto = auto;
      }
      else if(auto > 10000) {
        console.log('WARNING <ImageFrame|ini>: Animation period is too large (must be within 1000ms to 10000ms) - animation NOT activated');
      }
      return this.imageframe;
    }
    else {
      throw new Error('<ImageFrame|ini>: Image list must contain at least 1 image path');
      return null;
    }
  }

  /* -------------------------------------------------------------------------------------- //
      Internal function for the actual 'turning' of the rotation of images.
  // -------------------------------------------------------------------------------------- */
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

  /* -------------------------------------------------------------------------------------- //
      Internal function for the actual 'loading' of one image onto the imageframe.
      Transitions were manually calculated and the swap is a combination of direct &
      <requestAnimationFrame>-based scopes - for now this seems to be an okay balance to
      attain the goal - which is to not cause a stutter and making the swap out to be a
      smooth opacity fade transition.
  // -------------------------------------------------------------------------------------- */
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
      const actionOnFinish = (action) => {
        previmage.style.willChange = 'auto'; // GPU promotion OFF for prev image.
        this.active = false;
      };
      this.imagearray[n].addEventListener('transitionend', actionOnFinish);
      this.imagefunctionarray[n] = actionOnFinish;
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

  /* -------------------------------------------------------------------------------------- //
      Activate the animation functionality - so the timers actually start.
      This had to be made explicit due to cross-browser & low-end browser fine-tunability.
      Ideally, this should be applied on <pageshow> event of the <window> object - but
      especially Firefox Gecko will go mad if not done here.
      Provided <load> event of <window> object has <{ once: true }> assigned, it can also
      be applied there. In any case, repeated application simply clears all current
      timing functionality & restarts.
  // -------------------------------------------------------------------------------------- */
  animateOn() {
    clearInterval(this.timingfunc);
    requestAnimationFrame(() => {
      this.presentImage();
    });
    if((this.auto >= 1000) && (this.auto <= 10000)) {
      requestAnimationFrame(() => {
        this.animate();
      });
    }
  }

  /* -------------------------------------------------------------------------------------- //
      Ideally this should be applied on <pagehide> event of the <window> object so that
      tab switching, etc conserves mem & does not force browser to go into memory saving
      mode. Again, this is imperative for the Firefox engine.
  // -------------------------------------------------------------------------------------- */
  animateOff() {
    clearInterval(this.timingfunc);
  }

  /* -------------------------------------------------------------------------------------- //
      Fully unload imageframe instance so it can load another one on the same object.
  // -------------------------------------------------------------------------------------- */
  removeFrame() {
    clearInterval(this.timingfunc);
    this.auto = 0;
    requestAnimationFrame(() => {
      this.active = true;
    });
    this.at = 0;
    this.arrowprev.removeEventListener('click', this.arrowfunc);
    this.arrowffwd.removeEventListener('click', this.arrowfunc);
    this.arrowfunc = null;
    this.arrowprev.remove();
    this.arrowffwd.remove();
    const n = this.imageamount + 1;
    this.imageview = null;
    for(let u = 0; u < n; ++u) {
      this.indicationarray.pop().remove();
      if(this.imagefunctionarray[u] !== null) {
        this.imagearray[u].removeEventListener('transitionend', this.imagefunctionarray[u]);
        this.imagefunctionarray[u] = null;
        this.imagearray[u].remove();
        this.imagearray[u] = null;
      }
      else {
        this.imageitemarray[u] = null;
      }
    }
    for(let u = 0; u < n; ++u) {
      this.imagearray.pop();
      this.imageitemarray.pop();
      this.imagefunctionarray.pop();
    }
    this.indication.remove();
    this.imageframe.remove();
    this.indication = null;
    this.imageframe = null;
  }
}
