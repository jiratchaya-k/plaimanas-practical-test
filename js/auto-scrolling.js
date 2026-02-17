const initAutoScrollText = async () => {
  await document.fonts.ready;

  const items = document.querySelectorAll(".scrolling-text-item");
  const speed = window.innerWidth <= 768 ? 0.6 : 1;

  horizontalLoop(items, {
    speed,
    repeat: -1,
  });
};

initAutoScrollText();

// gsap utils
const horizontalLoop = (items, config) => {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    pixelsPerSecond = (config.speed || 1) * 100,
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  gsap.set(items, {
    xPercent: (i, el) => {
      widths[i] = Number.parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = gsap.getProperty(el, "xPercent");
      return xPercents[i];
    },
  });

  totalWidth = items[length - 1].offsetLeft + widths[length - 1] - startX;

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i];

    tl.to(
      item,
      {
        xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    ).fromTo(
      item,
      {
        xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
      },
      {
        xPercent: xPercents[i],
        duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false,
      },
      distanceToLoop / pixelsPerSecond,
    );

    times[i] = distanceToStart / pixelsPerSecond;
  }

  return tl;
};
