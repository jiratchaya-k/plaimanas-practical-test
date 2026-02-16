const onHoverColectionVideo = (event) => {
  if (window.innerWidth <= 768) return;

  const collectionImg = document.querySelector(`#${event.target.id} img`);
  collectionImg.style.opacity = "0";
  setTimeout(() => {
    collectionImg.style.display = "none";
  }, 300);
};

const onLeaveColectionVideo = (event) => {
  if (window.innerWidth <= 768) return;

  const collectionImg = document.querySelector(`#${event.target.id} img`);
  collectionImg.style.display = "block";
  setTimeout(() => {
    collectionImg.style.opacity = "1";
  }, 100);
};

const onHoverCollectionImage = (event) => {
  if (window.innerWidth <= 768) return;

  const collectionImgDefault = document.querySelector(
    `#${event.target.id} .collection-image-default`,
  );

  collectionImgDefault.style.animation = "slide-out 0.5s ease-in-out";
  setTimeout(() => {
    collectionImgDefault.style.display = "none";
  }, 300);
};

const onLeaveCollectionImage = (event) => {
  if (window.innerWidth <= 768) return;

  const collectionImgDefault = document.querySelector(
    `#${event.target.id} .collection-image-default`,
  );
  collectionImgDefault.style.display = "block";
  collectionImgDefault.style.animation = "slide-in 0.5s ease-in-out";
};
