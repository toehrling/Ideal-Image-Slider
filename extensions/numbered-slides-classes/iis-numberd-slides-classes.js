/*
 * Ideal Image Slider: Numbered Slide Classes Extension v1.0.0
 *
 * By Thomas Oehrling
 *
 * Copyright (C) 2015 Thomas Oehrling
 * https://raw.githubusercontent.com/toehrling/Ideal-Image-Slider/master/LICENSE
 */

(function(IIS) {
  "use strict";

  IIS.Slider.prototype.addNumberedClasses = function() {
    IIS._addClass(this._attributes.container, 'iis-has-numberclasses');

    Array.prototype.forEach.call(this._attributes.slides, function(slide, i){
      IIS._addClass(slide, 'slide-' + i);
      console.log(slide);
    }.bind(this));
  };

  return IIS;

})(IdealImageSlider);
