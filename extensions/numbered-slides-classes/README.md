# Ideal Image Slider - Captions Extension

Adds captions support to the Ideal Image Slider.

## Requirements

* [Ideal Image Slider](https://github.com/toehrling/Ideal-Image-Slider) v1.3.0+

## Usage

Just add numbered class ti every slide to style stuff slide specific

```html
<div id="slider">
    <img src="img/1.jpg" title="Baloons" alt="This is the caption content">
    <img data-src="img/2.jpg" src="" title="Skateboard" alt="Captions <em>can</em> contain <strong>HTML</strong>">
    <img data-src="img/3.jpg" src="" alt="This will be overridden">
    <img data-src="img/4.jpg" src="" title="A title without a caption" alt="">
</div>

```

The `iis-numbered-slide-classes.js` must be included after `ideal-image-slider.js`.

```html
<script src="ideal-image-slider.js"></script>
<script src="extensions/numberd-slides-class/iis-numbered-slide-classes.js"></script>
<script>
var slider = new IdealImageSlider.Slider('#slider');
slider.addNumberedClasses();
slider.start();
</script>
```
