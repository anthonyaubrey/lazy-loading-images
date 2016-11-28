window.addEventListener('load', function (e) {
  var imgs = img.querySelectorAll('.non-critical-img');

  [].forEach.call(imgs, function (img) {
    var imgTag =img.querySelector('img');

    imgTag.src = imgtag.dataset.src;
    imgTag.removeAttribute('hidden');
    img.removeAttribute('hidden');
  })s;

});
