export let requestInterval = function(fn, delay) {
  var requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        function(callback, element) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })(),
    start = new Date().getTime(),
    handle = {};
  function loop() {
    handle.value = requestAnimFrame(loop);
    var current = new Date().getTime(),
      delta = current - start;
    if (delta >= delay) {
      fn.call();
      start = new Date().getTime();
    }
  }
  handle.value = requestAnimFrame(loop);
  return handle;
};
